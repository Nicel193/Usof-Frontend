import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "updatePost",
  initialState: {
    shouldUpdatePosts: false,
  },
  reducers: {
    updatePosts(state) {
        state.shouldUpdatePosts = true;
    },
  },
});

export const { updatePosts } = postSlice.actions;

export default postSlice.reducer;
