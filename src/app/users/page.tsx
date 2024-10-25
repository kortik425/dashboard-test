import React from "react";
import UserTable from "./components/user-table";
import PostList from "./components/post-list";
import SearchBar from "./components/searchbar";
import { ModalProvider } from "@/context/modal-context";
import AddPostModal from "./components/add-post-content";

const Users: React.FC = ({}) => {
  return (
    <>
      <SearchBar />
      <ModalProvider>
        <UserTable />
        <PostList />
        <AddPostModal />
      </ModalProvider>
    </>
  );
};

export default Users;
