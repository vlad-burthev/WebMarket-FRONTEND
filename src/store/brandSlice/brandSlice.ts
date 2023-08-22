import { createSlice } from "@reduxjs/toolkit";
import {
  createBrandExtraReducer,
  deleteBrandExtraReducer,
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
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    getBrandsExtraReducer(builder);
    createBrandExtraReducer(builder);
    deleteBrandExtraReducer(builder);
  },
});

export const { setSelectedBrand, setBrands } = brandSlice.actions;
export default brandSlice.reducer;
