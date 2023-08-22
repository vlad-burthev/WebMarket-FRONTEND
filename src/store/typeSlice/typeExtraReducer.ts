import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { typesRootState } from "./typeSlice";
import { createType, deleteType, getTypes } from "./typeAPI";

export const getTypesExtraReducer = (
  builder: ActionReducerMapBuilder<typesRootState>
) => {
  builder
    .addCase(getTypes.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(getTypes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.types = action.payload;
      state.error = null;
    })
    .addCase(getTypes.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};

export const createTypesExtraReducer = (
  builder: ActionReducerMapBuilder<typesRootState>
) => {
  builder
    .addCase(createType.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(createType.fulfilled, (state) => {
      state.status = "succeeded";
      state.error = null;
    })
    .addCase(createType.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};

export const deleteTypesExtraReducer = (
  builder: ActionReducerMapBuilder<typesRootState>
) => {
  builder
    .addCase(deleteType.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(deleteType.fulfilled, (state) => {
      state.status = "succeeded";
      state.error = null;
    })
    .addCase(deleteType.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};
