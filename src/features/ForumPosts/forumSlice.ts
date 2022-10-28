import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import {
  getPosts as getPostsService,
  updatePost as updatePostService,
  createPost as createPostService,
} from "./forumService";
import Post from "./types";

export interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "failed";
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (amount: number) => {
    // The value we return becomes the `fulfilled` action payload
    let posts = await getPostsService();
    return posts.slice(0, amount);
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post: Post) => {
    // The value we return becomes the `fulfilled` action payload
    return await updatePostService(post);
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post: Post) => {
    // The value we return becomes the `fulfilled` action payload
    return await createPostService(post);
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updatePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts?.push(action.payload);
      })
      .addCase(updatePost.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts?.push(action.payload);
      })
      .addCase(createPost.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;

export const selectPostsLoading = (state: RootState) => state.posts.status;

export default postsSlice.reducer;
