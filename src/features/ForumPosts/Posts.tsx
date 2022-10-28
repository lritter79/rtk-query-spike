import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetPostsQuery } from "./forumService";
import PostComponent from "./Post";
import PostForm from "./PostForm";

const Posts: React.FunctionComponent = () => {
  // Similar to componentDidMount and componentDidUpdate:
  const { data: posts = [], error, isLoading, isSuccess } = useGetPostsQuery();

  return (
    <div>
      <div>
        <PostForm />
      </div>
      Posts
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts?.map((value) => {
            return <PostComponent post={value} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
