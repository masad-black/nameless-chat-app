import { useState } from "react";

import SearchTabs from "./SearchTabs";
import UsersList from "../lists/UsersList";
import GroupsList from "../lists/GroupsList";

export default function MainTemplate() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="border min-w-5xl h-full flex flex-col border-b border-gray-200 rounded-xl">
      <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="overflow-auto">
        {activeTab === "users" && <UsersList />}
        {activeTab === "groups" && <GroupsList />}
      </div>
    </div>
  );
}
