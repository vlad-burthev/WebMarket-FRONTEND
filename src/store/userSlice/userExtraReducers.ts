import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { userRootState } from "./userSlice";
import { check, deleteUser, getUsers, login, registration } from "./userAPI";

export const registrationExtraReducer = (
  builder: ActionReducerMapBuilder<userRootState>
) => {
  builder
    .addCase(registration.pending, (state) => {
      state.status = "pending";
      state.error = "idle";
    })
    .addCase(registration.fulfilled, (state, action: PayloadAction<any>) => {
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
    })
    .addCase(registration.rejected, (state) => {
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

export const getUsersExtraReducer = (
  builder: ActionReducerMapBuilder<userRootState>
) => {
  builder.addCase(getUsers.pending, (state) => {
    state.status = "pending";
    state.error = "idle";
  });
  builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
    state.status = "succeeded";
    state.users = action.payload;
    state.error = null;
  });
  builder.addCase(getUsers.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message || "Произошла ошибка";
  });
};

export const deleteUserExtraReducer = (
  builder: ActionReducerMapBuilder<userRootState>
) => {
  builder
    .addCase(deleteUser.pending, (state) => {
      state.status = "pending";
      state.error = "idle";
    })
    .addCase(deleteUser.fulfilled, (state) => {
      state.status = "succeeded";
      state.error = null;
    })
    .addCase(deleteUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Произошла ошибка";
    });
};
