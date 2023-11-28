import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authorizationStatus",
  initialState: {
    authorizationStatus: false,
    userData: undefined
  },
  reducers: {
    changeAuth(state, action) {
      state.authorizationStatus = action.payload;
    },
    setUserData(state, action){
      state.userData = action.payload;
    }
  },
});

export const { changeAuth, setUserData } = authSlice.actions;

export default authSlice.reducer;
