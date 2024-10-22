import { User } from "../app/interfaces/user";
import { Post } from "../app/interfaces/post";

export async function getUserList(): Promise<User[]> {
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

export async function getPostList(userId?: number): Promise<Post[]> {
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
