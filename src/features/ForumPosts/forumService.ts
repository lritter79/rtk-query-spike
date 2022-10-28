import Post from "./types";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  return posts;
}

export async function getPost(id: number = 1): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts${id}`
  );
  return await response.json();
}

export async function updatePost(post: Post): Promise<Post> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

export async function createPost(post: Post): Promise<Post> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
