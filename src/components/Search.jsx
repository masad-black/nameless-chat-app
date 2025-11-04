"use client";

import { useEffect, useState } from "react";
import UsersList from "./UsersList";
import GroupsList from "./GroupsList";
import { searchNewUsersOrGroups } from "@/utils/apis/search.js";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [activeTab, setActiveTab] = useState("groups");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedUsersList, setSearchedList] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;

    const id = window.setTimeout(async () => {
      console.log("now search!!", searchQuery);
      const data = await searchNewUsersOrGroups(searchQuery, "users");
      console.log("searched result: ", data);
    }, 600);

    return () => window.clearTimeout(id);
  }, [searchQuery]);

  return (
    <div className="w-scree h-screen bg-white flex flex-col">
      {/* Search Bar */}
      <div className="px-4 py-3 ">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={`Search by ${
              activeTab === "users" ? "username" : "group title"
            }...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-0 text-gray-600"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => setActiveTab("users")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "users"
              ? "text-blue-500 "
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("groups")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "groups"
              ? "text-blue-500"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Groups
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-2 ">
        {activeTab === "users" && (
          <UsersList searchedUserList={searchedUsersList} />
        )}

        {activeTab === "groups" && <GroupsList />}
      </div>
    </div>
  );
};

export default Search;
