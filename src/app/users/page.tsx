import React from "react";
import { User } from "@/interfaces/user";
import { fetchPostList, fetchUserList } from "@/api/data-fetching";
import UserTable from "./components/user-table";
import { DataProvider } from "@/context/data-context";
import { Post } from "@/interfaces/post";
import PostList from "./components/post-list";

const Users: React.FC = async ({}) => {
  const users: User[] = await fetchUserList();
  const posts: Post[] = await fetchPostList();
  return (
    <DataProvider initialState={{ userList: users, postList: posts }}>
      <UserTable usersList={users} />
      <PostList />
    </DataProvider>
  );
};

export default Users;
