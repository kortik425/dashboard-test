import { User } from "../interfaces/user";
import { Post } from "../interfaces/post";

export async function fetchUserList(): Promise<User[]> {
  let users: User[] = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 20 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    users = await response.json();
  } catch (error) {
    console.error(error);
    users = [];
  }
  return users;
}

export async function fetchPostList(userId?: number): Promise<Post[]> {
  let posts: Post[] = [];
  try {
    const response = await fetch(
      userId
        ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        : `https://jsonplaceholder.typicode.com/posts`
    );
    posts = await response.json();
  } catch (error) {
    console.error(error);
    posts = [];
  }
  return posts;
}

export async function fetchPost(postId: number): Promise<Post> {
  let post = null;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!response.ok) {
      throw new Error(`Error: Failed to fetch post with ID ${postId}`);
    }
    post = await response.json();
  } catch (error) {
    console.error(error);
  }
  return post;
}
