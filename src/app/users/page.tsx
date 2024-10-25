import React from "react";
import UserTable from "./components/user-table";
import PostList from "./components/post-list";
import SearchBar from "./components/searchbar";

const Users: React.FC = ({}) => {
  return (
    <>
      <SearchBar />
      <UserTable />
      <PostList />
    </>
  );
};

export default Users;
