import { Post } from "@/interfaces/post";

export type requestBody = {
  title: string;
  body: string;
};

export async function insertPost(
  requestBody: requestBody,
  uid: number
): Promise<Post> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...requestBody,
          userId: uid,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: Failed to POST new post`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
