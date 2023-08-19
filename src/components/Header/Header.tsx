import type { FC } from "react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import HeaderMob from "./HeaderMob";
import {
  BASKET_ROUTE,
  LOGIN_ROUTE,
  ORDER_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "@/constants/constants";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setLoginLogout, setUser } from "@/store/userSlice/userSlice";
import { initialState as initialUserState } from "@/store/userSlice/userSlice";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuth, isAdmin, status } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const logoutUserHandler = () => {
    dispatch(setLoginLogout(false));
    dispatch(setUser(initialUserState.user));
  };

  return (
    <header className="bg-indigo-400">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={SHOP_ROUTE} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {isAuth && (
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link
              to={BASKET_ROUTE}
              className="text-sm font-semibold leading-6 text-white"
            >
              Basket
            </Link>
            <Link
              to={ORDER_ROUTE}
              className="text-sm font-semibold leading-6 text-white"
            >
              Orders
            </Link>
          </Popover.Group>
        )}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isAuth ? (
            <>
              <Link
                to={LOGIN_ROUTE}
                className="mr-4 text-sm font-semibold leading-6 text-white"
              >
                Log in
              </Link>
              <Link
                to={REGISTRATION_ROUTE}
                className="text-sm font-semibold leading-6 text-white"
              >
                Registration
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={logoutUserHandler}
                className="text-sm font-semibold leading-6 text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <HeaderMob
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </header>
  );
};

export default Header;
