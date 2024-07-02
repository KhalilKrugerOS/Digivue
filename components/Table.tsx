"use client";
import { GetAllUsers } from "@/app/api/users/v1/users";
import Image from "next/image";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

interface IUser {
  id: number;
  fullname: string;
  avatar: string;
  phonenumber: string;
  joinedAt: string;
  address: string;
}
const Table = ({
  users,
  page,
  limit,
  handlePageChange,
  setLimit,
}: {
  users: IUser[];
  page: number;
  limit: number;
  handlePageChange: (newPage: number | string) => void;
  setLimit: (limit: number) => void;
}) => {
  const [currentSort, setCurrentSort] = useState("default");

  const sortTypes = {
    up: {
      class: "sort-up",
      fn: (a: any, b: any) => a.fullname.localeCompare(b.fullname),
    },
    down: {
      class: "sort-down",
      fn: (a: any, b: any) => b.fullname.localeCompare(a.fullname),
    },
    default: {
      class: "sort",
      fn: (a: any, b: any) => a,
    },
  };

  const onSortChange = () => {
    let nextSort = "default";

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    setCurrentSort(nextSort);
    console.log("dfqs");
    console.log(
      users.sort(sortTypes[currentSort as keyof typeof sortTypes].fn)
    );
  };
  return (
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          {/* <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Page Visits</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div>
      </div> */}
        </div>

        <div className="block w-full overflow-x-auto">
          <table
            id="myTable"
            className="items-center bg-transparent w-full border-collapse "
          >
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  id
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  <button onClick={onSortChange}>Full Name</button>
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  joined At
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Phone Number
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  city
                </th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users
                  .sort(sortTypes[currentSort as keyof typeof sortTypes].fn)
                  .map((user: IUser) => {
                    return (
                      <tr key={user.id} className="hover:bg-gray-100">
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {user.id}
                        </td>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          <div className="flex flex-row justify-between items-center gap-3">
                            <Image
                              src={user.avatar}
                              alt="avatar"
                              width={45}
                              height={45}
                            />
                            {user.fullname}
                          </div>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {new Date(user.joinedAt).toDateString()}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                          {user.phonenumber}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                          {user.address}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          <Pagination
            totalPages={Math.ceil(100 / limit)}
            currentPage={page}
            limit={limit}
            siblings={1}
            handlePageChange={handlePageChange}
            setLimit={setLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
