import { $authHost, $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

import jwtDecode from "jwt-decode";
import { T_User, setIsAdmin, setLoginLogout, setUser } from "./userSlice";

interface registrationArgs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  phoneNumber: string;
}

export const registration = createAsyncThunk(
  "user/registration",
  async ({
    email,
    firstName,
    lastName,
    password,
    role = "USER",
    phoneNumber,
  }: registrationArgs) => {
    const { data } = await $host.post("api/user/registration", {
      email,
      firstName,
      lastName,
      password,
      role,
      phoneNumber,
    });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
  }
);

interface loginArgs {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: loginArgs, { dispatch }) => {
    try {
      const { data } = await $host.post("api/user/login", {
        email,
        password,
      });

      const decode: T_User = jwtDecode(data.token);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (decode.role === "ADMIN") {
        dispatch(setIsAdmin(true));
      }

      dispatch(setUser(data));
      dispatch(setLoginLogout(true));

      const token = jwtDecode(data.token);
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const check = createAsyncThunk("user/auth", async (_, { dispatch }) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const { data } = await $authHost.get("api/user/auth", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const decode: T_User = jwtDecode(data.token);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (decode.role === "ADMIN") {
        dispatch(setIsAdmin(true));
      }
      dispatch(setUser(data));
      dispatch(setLoginLogout(true));
      return jwtDecode(data.token);
    } else {
      return;
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса: ", error);
    throw error;
  }
});
