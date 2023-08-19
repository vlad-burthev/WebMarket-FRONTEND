import { createSlice } from "@reduxjs/toolkit";
import {
  checkExtraReducer,
  loginExtraReducer,
  registrationExtraReducer,
} from "./userExtraReducers";
import { login } from "./userAPI";

type T_User = {
  id: number | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  role: string | null;
  phoneNumber: string | null;
};

interface I_InitialState {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
  isAuth: boolean;
  isAdmin: boolean;
  user: T_User;
}

export type userRootState = I_InitialState;

export const initialState: I_InitialState = {
  status: "idle",
  error: "idle",
  isAuth: false,
  isAdmin: false,
  user: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    role: null,
    phoneNumber: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginLogout: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    registrationExtraReducer(builder);
    loginExtraReducer(builder);
    checkExtraReducer(builder);
  },
});

export const { setLoginLogout, setIsAdmin, setUser } = userSlice.actions;
export default userSlice.reducer;
