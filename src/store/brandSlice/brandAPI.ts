import { $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBrands = createAsyncThunk("brands/getBrands", async () => {
  try {
    const { data } = await $host.get("api/brand");
    return data;
  } catch (error) {
    return error;
  }
});

export const createBrand = createAsyncThunk(
  "types/createBrand",
  async (name: string) => {
    try {
      const { data } = await $host.post("api/brand", {
        name,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);
