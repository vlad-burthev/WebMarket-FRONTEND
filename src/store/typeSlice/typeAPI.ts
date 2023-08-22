import { $adminHost, $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTypes } from "./typeSlice";

export const getTypes = createAsyncThunk(
  "types/getTypes",
  async (_, { dispatch }) => {
    try {
      const { data } = await $host.get("api/type");
      dispatch(setTypes(data));
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
);

export const createType = createAsyncThunk(
  "types/createTypes",
  async (name: string) => {
    try {
      const { data } = await $adminHost.post("api/type/create", { name });
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
);

export const deleteType = createAsyncThunk(
  "types/deleteType",
  async (name: string) => {
    try {
      const { data } = await $adminHost.post("api/type/delete", { name });
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
);
