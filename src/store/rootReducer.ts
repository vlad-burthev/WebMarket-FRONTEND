import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import deviceSlice from "./deviceSlice/deviceSlice";
import typeSlice from "./typeSlice/typeSlice";
import brandSlice from "./brandSlice/brandSlice";
import basketSlice from "./basketSlice/basketSlice";

export const rootReducer = combineReducers({
  user: userSlice,
  device: deviceSlice,
  type: typeSlice,
  brand: brandSlice,
  basket: basketSlice,
});
