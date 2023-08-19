import { $authHost, $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import axios from "axios";

import jwtDecode from "jwt-decode";
import { setLoginLogout } from "./userSlice";

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
  async ({ email, password }: loginArgs, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await $host.post("api/user/login", {
        email,
        password,
      });

      dispatch(setLoginLogout(true));
      localStorage.setItem("token", data.token);
      const token = jwtDecode(data.token);
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const check = createAsyncThunk("user/auth", async () => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await $authHost.get("api/user/auth", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return jwtDecode(data.token);
  } catch (error) {
    console.error("Ошибка при выполнении запроса: ", error);
    throw error;
  }
});
