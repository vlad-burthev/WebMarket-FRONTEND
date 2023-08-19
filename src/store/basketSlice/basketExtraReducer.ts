import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getBasket } from "./basketAPI";

export const getBasketExtraReducer = (
  builder: ActionReducerMapBuilder<any>
) => {
  builder
    .addCase(getBasket.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(getBasket.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.basket = action.payload;
      state.error = null;
    })
    .addCase(getBasket.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};
