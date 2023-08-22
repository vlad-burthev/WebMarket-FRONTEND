import { createSlice } from "@reduxjs/toolkit";
import {
  createTypesExtraReducer,
  deleteTypesExtraReducer,
  getTypesExtraReducer,
} from "./typeExtraReducer";

interface I_InitialState {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
  selectedType: null | number;
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
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    getTypesExtraReducer(builder);
    createTypesExtraReducer(builder);
    deleteTypesExtraReducer(builder);
  },
});

export const { setSelectedType, setTypes } = typeSlice.actions;
export default typeSlice.reducer;
