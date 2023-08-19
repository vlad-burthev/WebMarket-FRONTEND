import { $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTypes = createAsyncThunk("types/getTypes", async () => {
  try {
    const { data } = await $host.get("api/type");
    return data;
  } catch (error) {
    return error;
  }
});

export const createType = createAsyncThunk(
  "types/createTypes",
  async (name: string) => {
    try {
      const { data } = await $host.post("api/type", {
        name,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);
