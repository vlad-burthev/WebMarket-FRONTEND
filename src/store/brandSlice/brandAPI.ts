import { $adminHost, $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBrands } from "./brandSlice";

export const getBrands = createAsyncThunk(
  "brands/getBrands",
  async (_, { dispatch }) => {
    try {
      const { data } = await $host.get("api/brand");
      dispatch(setBrands(data));
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
);

export const createBrand = createAsyncThunk(
  "brands/createBrand",
  async (name: string) => {
    try {
      const { data } = await $adminHost.post("api/brand/create", { name });
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brands/deleteBrand",
  async (name: string) => {
    try {
      const { data } = await $adminHost.post("api/brand/delete", { name });
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
);
