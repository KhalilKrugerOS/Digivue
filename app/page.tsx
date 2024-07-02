"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SearchNav from "@/components/SearchNav";
import Table from "@/components/Table";
import { GetAllUsers } from "./api/users/v1/users";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const fetchUsers = async () => {
    const users = await GetAllUsers(page, limit);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, [page, limit]);
  function handlePageChange(newPage: number | string) {
    console.log(newPage);
    // cases where we can't change page

    if (
      (newPage === "&lsquo;" && page === 1) ||
      (newPage === "&rsquo;" && page === 10)
    )
      return;
    // cases where values are strings
    if (newPage === "&lsquo;") setPage(page - 1);
    else if (newPage === "&rsquo;") setPage(page + 1);

    if (typeof newPage === "number") setPage(newPage);
  }
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const filterUsers = (searchText: string) => {
    const regex = new RegExp(searchText, "i"); // i for case-insensitive
    return users.filter(
      (user: any) =>
        regex.test(user.fullname) ||
        regex.test(user.phonenumber) ||
        regex.test(user.address)
    );
  };
  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
    const searchResult = filterUsers(e.target.value);
    setSearchResults(searchResult);
  };

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <Header />
      <SearchNav
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />
      <Table
        users={searchText ? searchResults : users}
        limit={limit}
        page={page}
        handlePageChange={handlePageChange}
        setLimit={setLimit}
      />
    </main>
  );
}
