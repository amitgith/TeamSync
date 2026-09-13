import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedemployee, loginEmployee } from "./authAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    employee: null,
    isLoading: false,
  },

  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },

    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })

      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(currentLoggedemployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentLoggedemployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(currentLoggedemployee.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;

export default authSlice.reducer;
