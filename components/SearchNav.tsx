import React from "react";

const SearchNav = ({
  searchText,
  handleSearchChange,
}: {
  searchText: string;
  handleSearchChange: any;
}) => {
  return (
    <form className="relative flex-center items-center justify-center mt-auto mb-0">
      <input
        type="text"
        placeholder="Search for a specific user by name, phone number or address"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input"
      />
    </form>
  );
};

export default SearchNav;
