import { RoundUsersIcon, UsersIcon } from "@/app/assets/icons";

export default function SearchTab({ activeTab, setActiveTab }) {
  return (
    <div className="flex">
      <button
        onClick={() => setActiveTab("users")}
        className={`flex-1 flex items-center justify-center space-x-1.5 p-4 font-normal hover:cursor-pointer  relative ${
          activeTab === "users"
            ? "text-indigo-600 bg-[#EEF2FF]"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <UsersIcon color={activeTab === "users" ? "#6366F1" : "#9CA3AF"} />
        Users
        {activeTab === "users" && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
        )}
      </button>

      <button
        onClick={() => setActiveTab("groups")}
        className={`flex-1 flex items-center justify-center space-x-1.5 p-4 font-normal relative hover:cursor-pointer ${
          activeTab === "groups"
            ? "text-indigo-600 bg-[#EEF2FF]"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <RoundUsersIcon color={activeTab === "groups" ? "#6366F1" : "#9CA3AF"} />
        Groups
        {activeTab === "groups" && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
        )}
      </button>
    </div>
  );
}
