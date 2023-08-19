import { adminRoutes, authRoutes, publicRoutes } from "@/routes/routes";
import { Suspense, type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "@/store/store";

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  const { isAuth, isAdmin } = useAppSelector((state) => state.user);

  return (
    <>
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          {isAdmin &&
            adminRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          {isAuth &&
            authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
