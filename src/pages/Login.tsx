import ErrorModal from "@/components/UI/ErrorModal";
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { login } from "@/store/userSlice/userAPI";
import { useState, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.user);
  const dispath = useAppDispatch();
  const loginHandler = async () => {
    const data: any = await dispath(login({ email, password }));

    return data.error
      ? alert("Неверный пароль или eamil")
      : navigate(SHOP_ROUTE);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="mt-5 flex items-center justify-between">
              <label
                htmlFor="password"
                className=" text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <button
                  onClick={() => setOpen(true)}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={loginHandler}
              className={`${
                status === "pending" ? "bg-indigo-500" : "bg-indigo-600"
              } mt-10 flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {status === "pending" ? "Sending" : "Sign in"}
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to={REGISTRATION_ROUTE}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Registration!
            </Link>
          </p>
        </div>
      </div>
      <ErrorModal
        modalTitle="Forgot password ?"
        modalText="It's your problem, not mine. Create new account."
        linkName="Create new acc."
        linkPath={REGISTRATION_ROUTE}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Login;
