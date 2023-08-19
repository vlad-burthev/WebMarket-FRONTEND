import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { deviceRootState } from "./deviceSlice";
import { createDevice, getDevices, getOneDevice } from "./deviceAPI";

export const getDevicesExtraReducer = (
  builder: ActionReducerMapBuilder<deviceRootState>
) => {
  builder
    .addCase(getDevices.pending, (state) => {
      state.status = "pending";
      state.error = "idle";
    })
    .addCase(getDevices.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.devices = action.payload;
      state.error = "idle";
    })
    .addCase(getDevices.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};

export const getOneDeviceExtraReducer = (
  builder: ActionReducerMapBuilder<deviceRootState>
) => {
  builder
    .addCase(getOneDevice.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(getOneDevice.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.device = action.payload;
      state.error = null;
    })
    .addCase(getOneDevice.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};

export const createDeviceExtraReducer = (
  builder: ActionReducerMapBuilder<deviceRootState>
) => {
  builder
    .addCase(createDevice.pending, (state) => {
      state.status = "pending";
      state.error = "idle";
    })
    .addCase(createDevice.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.devices = action.payload;
      state.error = "idle";
    })
    .addCase(createDevice.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};
