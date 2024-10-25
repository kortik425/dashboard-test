import React from "react";
import UserTable from "./components/user-table";
import PostList from "./components/post-list";
import SearchBar from "./components/searchbar";
import { ModalProvider } from "@/context/modal-context";
import AddPostModal from "./components/add-post-modal";
import { SearchFiltersProvider } from "@/context/search-context";

const Users: React.FC = ({}) => {
  return (
    <ModalProvider>
      <SearchFiltersProvider>
        <SearchBar />
        <UserTable />
      </SearchFiltersProvider>
      <PostList />
      <AddPostModal />
    </ModalProvider>
  );
};

export default Users;
