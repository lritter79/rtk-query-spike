import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createPost, selectPostsLoading } from "./forumSlice";

type Title = string;
type Body = string;

// This type will be used later in the form.
type Post = {
  title: Title;
  body: Body;
};

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm<Post>();

  const loadingStatus = useAppSelector(selectPostsLoading);

  const dispatch = useAppDispatch();
  const onSubmit = async (data: Post) => {
    console.log("submitted");
    console.log(data);
    dispatch(createPost({ userId: 1, body: data.body, title: data.title }));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Post Title
          <input type="text" {...register("title")} />
        </label>
        <br />
        <label>
          Post Body
          <input type="text" {...register("body")} />
        </label>
        <br />

        <button disabled={loadingStatus === "loading"}>Send</button>
      </form>
    </div>
  );
};

export default PostForm;
