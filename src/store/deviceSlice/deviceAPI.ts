import { $adminHost, $authHost, $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDevice } from "./deviceSlice";

interface DeviceArgs {
  page: number;
  limit: number;
  typeId: number | null;
  brandId: number | null;
}

interface CreateDeviceArgs {
  name: string;
}

export const getDevices = createAsyncThunk(
  "device/getDevices",
  async ({ page, limit, typeId, brandId }: DeviceArgs) => {
    const { data } = await $host.get("api/device", {
      params: {
        brandId,
        typeId,
        page,
        limit,
      },
    });
    return data;
  }
);

export const getOneDevice = createAsyncThunk(
  "device/getOneDevice",
  async (slug: string, { dispatch }) => {
    const { data } = await $host.get(`api/device/${slug}`);
    dispatch(setDevice(data));
    return data;
  }
);

export const createDevice = createAsyncThunk(
  "device/createDevice",
  async (formData: CreateDeviceArgs) => {
    try {
      const { data } = await $adminHost.post("api/device", formData);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
);

interface addRating {
  id: number;
  rate: number;
}
export const addRating = createAsyncThunk(
  "device/addRating",
  async ({ id, rate }: addRating) => {
    try {
      await $authHost.post(`api/rating/${id}`, {
        rate,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const deleteDevice = createAsyncThunk(
  "device/deleteDevice",
  async (name: string) => {
    try {
      const { data } = await $adminHost.post("api/device/delete", { name });
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
