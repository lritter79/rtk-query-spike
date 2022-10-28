import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPosts, selectPosts, selectPostsLoading } from "./forumSlice";
import PostComponent from "./Post";
import PostForm from "./PostForm";

const Posts: React.FunctionComponent = () => {
  // Similar to componentDidMount and componentDidUpdate:
  const posts = useAppSelector(selectPosts);
  const loadingStatus = useAppSelector(selectPostsLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts(1));
  }, []);
  return (
    <div>
      <div>
        <PostForm />
      </div>
      Posts
      {loadingStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map((value) => {
            return <PostComponent post={value} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
