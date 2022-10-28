import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useCreatePostMutation } from "../ForumPosts/forumService";
type Title = string;
type Body = string;

// This type will be used later in the form.
type Post = {
  title: Title;
  body: Body;
};

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm<Post>();

  const [createPost, result] = useCreatePostMutation();
  const dispatch = useAppDispatch();
  const onSubmit = async (data: Post) => {
    console.log("submitted");
    console.log(data);
    let post = await createPost({ ...data, userId: 1 }).unwrap();
    console.log(post);
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

        <button disabled={result.isLoading}>Send</button>
      </form>
    </div>
  );
};

export default PostForm;
