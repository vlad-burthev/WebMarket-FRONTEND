import { createSlice } from "@reduxjs/toolkit";
import {
  createTypesExtraReducer,
  getTypesExtraReducer,
} from "./typeExtraReducer";

interface I_InitialState {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
  selectedType: null | object;
  types: any[];
}

const initialState: I_InitialState = {
  status: "idle",
  error: null,
  selectedType: null,
  types: [],
};

export type typesRootState = I_InitialState;

const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    getTypesExtraReducer(builder);
    createTypesExtraReducer(builder);
  },
});

export default typeSlice.reducer;

export const { setSelectedType } = typeSlice.actions;
