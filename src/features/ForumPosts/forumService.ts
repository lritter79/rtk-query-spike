import Post from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export async function getPosts(): Promise<Post[]> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let posts = await response.json();
//   return posts;
// }

// export async function getPost(id: number = 1): Promise<Post> {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts${id}`
//   );
//   return await response.json();
// }

// export async function updatePost(post: Post): Promise<Post> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify(post),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   return await response.json();
// }

// export async function createPost(post: Post): Promise<Post> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   return await response.json();
// }

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getPost: builder.query<Post, number>({
      query: (id: number) => `/posts/${id}`,
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (post: Post) => ({
        url: "/posts",
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<Post, Post>({
      query: (post: Post) => ({
        url: "/posts",
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
