import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
    },
    authSuccess: (state, action) => {
      (state.loading = false), (state.currentUser = action.payload);
    },
    authFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { authStart, authSuccess, authFailure } = userSlice.actions;
export default userSlice.reducer;
