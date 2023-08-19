import { createSlice } from "@reduxjs/toolkit";
import { getBasketExtraReducer } from "./basketExtraReducer";

interface I_InitialState {}

export type basketRootState = I_InitialState;

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getBasketExtraReducer(builder);
  },
});

export default basketSlice.reducer;
