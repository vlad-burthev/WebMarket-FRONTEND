import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { userRootState } from "./userSlice";
import { check, login, registration } from "./userAPI";

export const registrationExtraReducer = (
  builder: ActionReducerMapBuilder<userRootState>
) => {
  builder.addCase(registration.pending, (state) => {
    state.status = "pending";
    state.error = "idle";
  });
  builder.addCase(
    registration.fulfilled,
    (state, action: PayloadAction<any>) => {
      const { id, email, firstName, lastName, phoneNumber, role } =
        action.payload;
      state.status = "succeeded";
      state.isAuth = true;
      state.user = {
        id,
        email,
        firstName,
        lastName,
        phoneNumber,
        role,
      };
    }
  );
  builder.addCase(registration.rejected, (state) => {
    state.status = "failed";
    state.error = "Произошла ошибка при регистрации";
  });
};

export const loginExtraReducer = (
  builder: ActionReducerMapBuilder<userRootState>
) => {
  builder.addCase(login.pending, (state) => {
    state.status = "pending";
    state.error = "idle";
  });
  builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
    const { id, email, firstName, lastName, phoneNumber, role } =
      action.payload;
    state.status = "succeeded";
    state.isAuth = true;
    state.user = {
      id,
      email,
      firstName,
      lastName,
      phoneNumber,
      role,
    };
  });
  builder.addCase(login.rejected, (state, action) => {
    state.status = "failed";
    state.isAuth = false;
    state.error = action.error.message || "Произошла ошибка";
  });
};

export const checkExtraReducer = (
  builder: ActionReducerMapBuilder<userRootState>
) => {
  builder.addCase(check.pending, (state) => {
    state.status = "pending";
    state.error = "idle";
  });
  builder.addCase(check.fulfilled, (state, action: PayloadAction<any>) => {
    state.status = "succeeded";
    state.user = action.payload;
    state.error = null;
  });
  builder.addCase(check.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message || "Произошла ошибка";
  });
};
