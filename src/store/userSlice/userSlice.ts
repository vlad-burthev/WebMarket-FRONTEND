import { createSlice } from "@reduxjs/toolkit";
import {
  checkExtraReducer,
  deleteUserExtraReducer,
  getUsersExtraReducer,
  loginExtraReducer,
  registrationExtraReducer,
} from "./userExtraReducers";

export type T_User = {
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
  users: any[];
  user: T_User | undefined;
}

export type userRootState = I_InitialState;

export const initialState: I_InitialState = {
  status: "idle",
  error: "idle",
  isAuth: false,
  isAdmin: false,
  users: [],
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
    setUsers: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    registrationExtraReducer(builder);
    loginExtraReducer(builder);
    checkExtraReducer(builder);
    getUsersExtraReducer(builder);
    deleteUserExtraReducer(builder);
  },
});

export const { setLoginLogout, setIsAdmin, setUser, setUsers } =
  userSlice.actions;
export default userSlice.reducer;
