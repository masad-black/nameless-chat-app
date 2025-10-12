"use client";

import { useState } from "react";
import UsersList from "./UsersList";
import GroupsList from "./GroupsList";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-scree h-screen bg-white flex flex-col">
      {/* Search Bar */}
      <div className="px-4 py-3 ">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users and groups..."
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
              ? "text-blue-600 border-b border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("groups")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "groups"
              ? "text-blue-600 border-b border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Groups
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-2 ">
        {activeTab === "users" && <UsersList />}

        {activeTab === "groups" && <GroupsList />}
      </div>
    </div>
  );
};

export default Search;
