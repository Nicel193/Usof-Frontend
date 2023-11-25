import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authorizationStatus",
  initialState: {
    authorizationStatus: false,
  },
  reducers: {
    changeAuth(state, action) {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { changeAuth } = authSlice.actions;

export default authSlice.reducer;

// const defaultState = {
//   authorizationStatus: false,
// };

// export default function authReducer(state = defaultState, action) {
//   switch (action.type) {
//     case "LOG_IN":
//       return { ...state, authorizationStatus: true };
//     case "LOG_OUT":
//       return { ...state, authorizationStatus: false };
//     default:
//       return state;
//   }
// }
