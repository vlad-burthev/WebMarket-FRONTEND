import { $adminHost, $host } from "@/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  async (slug: string) => {
    const { data } = await $host.get(`api/device/${slug}`);
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
