import { createSlice } from "@reduxjs/toolkit";
import {
  createDeviceExtraReducer,
  getDevicesExtraReducer,
  getOneDeviceExtraReducer,
} from "./deviceExtraReducer";

type T_Device = {
  brandId: number | undefined;
  createdAt: string | undefined;
  id: number | undefined;
  img: string | undefined;
  info: any[] | undefined;
  name: string | undefined;
  price: number | undefined;
  ratings: any[] | undefined;
  slug: string | undefined;
  typeId: number | undefined;
  updatedAt: string | undefined;
};

interface DevicesData {
  rows: T_Device[];
  count: number;
}

interface I_InitialState {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
  page: number;
  devices: DevicesData;
  device: T_Device;
}

const initialState: I_InitialState = {
  devices: {
    rows: [],
    count: 0,
  },

  device: {
    brandId: undefined,
    createdAt: undefined,
    id: undefined,
    img: undefined,
    info: undefined,
    name: undefined,
    price: undefined,
    ratings: undefined,
    slug: undefined,
    typeId: undefined,
    updatedAt: undefined,
  },
  page: 1,
  status: "idle",
  error: null,
};

export type deviceRootState = I_InitialState;

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getDevicesExtraReducer(builder);
    getOneDeviceExtraReducer(builder);
    createDeviceExtraReducer(builder);
  },
});

export default deviceSlice.reducer;
