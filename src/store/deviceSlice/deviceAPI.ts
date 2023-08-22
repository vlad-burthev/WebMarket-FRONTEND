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
  async (device: CreateDeviceArgs) => {
    const { data } = await $adminHost.post("api/device/", device);

    return data;
  }
);

interface addRating {
  id: number;
  rate: number;
}
export const addRating = createAsyncThunk(
  "device/addRating",
  async ({ id, rate }: addRating) => {
    const token = localStorage.getItem("token ");
    await $authHost.post(`api/rating/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
      rate,
    });
  }
);
