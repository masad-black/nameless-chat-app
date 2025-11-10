"use client";

import { useEffect, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

import UsersList from "./UsersList";
import GroupsList from "./GroupsList";
import NewGroupForm from "./NewGroupForm";
import { searchNewUsersOrGroups } from "@/utils/apis/search.js";
import SearchTabs from "./SearchTabs";

const Search = () => {
  const [currActiveTabs, setCurrectActiveTabs] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [showGroupForm, setGroupForm] = useState(false);
  const [searchedUsersList, setSearchedList] = useState([]);

  // todo: also make the search context
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
    <div className="relative w-scree h-screen bg-white flex flex-col">
      {/* Search Bar */}
      <div className="flex items-center space-x-1 px-4 py-3">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={`Search by ${
              currActiveTabs === "users" ? "username" : "group title"
            }...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-0 text-gray-600"
          />
        </div>
        <button
          className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-500 transition-colors hover:cursor-pointer"
          onClick={() => setGroupForm(!showGroupForm)}
        >
          Create Group
        </button>
      </div>

      {/* Tabs */}
      <SearchTabs
        currActiveTabs={currActiveTabs}
        setCurrectActiveTabs={setCurrectActiveTabs}
      />

      {/* Content */}
      <div className="flex-1 px-2 ">
        {currActiveTabs === "users" && (
          <UsersList searchedUserList={searchedUsersList} />
        )}
        {currActiveTabs === "groups" && <GroupsList />}
      </div>

      {showGroupForm && <NewGroupForm setGroupForm={setGroupForm} />}
    </div>
  );
};

export default Search;
