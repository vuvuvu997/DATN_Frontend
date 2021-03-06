import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      state.user = {};
    },
    getProfileSuccess: (state, action) => {
      state.user = action.payload;
    },
    clearProfile: (state, action) => {
      state.user = {};
    },
    updatePassword: (state, action) => {},
    updateProfile: (state, action) => {},
    updateProfileSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

const userReducers = userSlice.reducer;
export default userReducers;
