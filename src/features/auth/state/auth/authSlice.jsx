import { createSlice } from "@reduxjs/toolkit";

export let authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      isLoading = false;
    },
    removeEmployee: (state) => {
      state.employee = null;
      isLoading = false;
    },
  },
});

export let { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
