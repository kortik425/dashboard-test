"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";
import { TextInput } from "@/components/UI";
import { useSearch } from "@/context/search-context";

const SearchBar: React.FC = ({}) => {
  const { filters, setFilters } = useSearch();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(e.target.value);
  };

  return (
    <TextInput
      label="Search User"
      iconComponent={<BiSearch />}
      isLabelHidden
      value={filters}
      onChange={handleInput}
      containerClassName="max-w-[580px] top-6 left-24 right-8 absolute md:relative md:top-[unset] md:left-[unset] md:right-[unset]"
      className="top-"
    />
  );
};

export default SearchBar;
