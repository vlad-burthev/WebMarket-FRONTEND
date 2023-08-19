import { $authHost } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async ({ token }: any) => {
    try {
      const { data } = await $authHost.get("/api/basket", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);
