import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { createBrand, deleteBrand, getBrands } from "./brandAPI";
import { brandsRootState } from "./brandSlice";

export const getBrandsExtraReducer = (
  builder: ActionReducerMapBuilder<brandsRootState>
) => {
  builder
    .addCase(getBrands.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(getBrands.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.brands = action.payload;
      state.error = null;
    })
    .addCase(getBrands.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};

export const createBrandExtraReducer = (
  builder: ActionReducerMapBuilder<brandsRootState>
) => {
  builder
    .addCase(createBrand.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(createBrand.fulfilled, (state) => {
      state.status = "succeeded";
      state.error = null;
    })
    .addCase(createBrand.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};

export const deleteBrandExtraReducer = (
  builder: ActionReducerMapBuilder<brandsRootState>
) => {
  builder
    .addCase(deleteBrand.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(deleteBrand.fulfilled, (state) => {
      state.status = "succeeded";
      state.error = null;
    })
    .addCase(deleteBrand.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};
