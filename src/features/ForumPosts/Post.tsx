import React from "react";
import Post from "./types";

interface Props {
  post: Post;
}
const PostComponent: React.FC<Props> = (props: Props) => {
  const { post } = props;
  return (
    <React.Fragment>
      <div>
        <table>
          <tr>
            <td>
              {" "}
              <h1>{post.title}</h1>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <p>{post.body}</p>
            </td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
};

export default React.memo(PostComponent);
