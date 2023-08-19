import { createSlice } from "@reduxjs/toolkit";
import {
  createBrandExtraReducer,
  getBrandsExtraReducer,
} from "./brandExtraReducer";

export interface I_InitialState {
  status: "idle" | "pending" | "succeeded" | "failed" | string;
  error: null | string;
  selectedBrand: null | object;
  brands: any[];
}

const initialState = {
  status: "idle",
  error: null,
  selectedBrand: null,
  brands: [],
};

export type brandsRootState = I_InitialState;

const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    getBrandsExtraReducer(builder);
    createBrandExtraReducer(builder);
  },
});

export default brandSlice.reducer;

export const { setSelectedBrand } = brandSlice.actions;
