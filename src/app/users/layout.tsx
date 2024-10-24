import React from "react";
import { User } from "@/interfaces/user";
import { fetchPostList, fetchUserList } from "@/api/data-fetching";
import { DataProvider } from "@/context/data-context";
import { Post } from "@/interfaces/post";

interface UsersLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const UsersLayout: React.FC<UsersLayoutProps> = async ({ children, modal }) => {
  const users: User[] = await fetchUserList();
  const posts: Post[] = await fetchPostList();
  return (
    <DataProvider initialState={{ userList: users, postList: posts }}>
      {children}
      {modal}
    </DataProvider>
  );
};

export default UsersLayout;
