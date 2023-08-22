import { lazy } from "react";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  ORDER_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "@/constants/constants";

import Shop from "@/pages/Shop";

const Login = lazy(() => import("@/pages/Login"));
const Registration = lazy(() => import("@/pages/Registration"));
const Admin = lazy(() => import("@/pages/Admin"));
const Order = lazy(() => import("@/pages/Order"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Basket = lazy(() => import("@/pages/Basket"));
const Device = lazy(() => import("@/pages/Device"));

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: DEVICE_ROUTE + "/:slug",
    Component: Device,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

export const authRoutes = [
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: ORDER_ROUTE,
    Component: Order,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
