export default function SearchTabs({ currActiveTabs, setCurrectActiveTabs }) {
  return (
    <div className="flex ">
      <div className="flex-1 flex items-center justify-center  p-0.5">
        <button
          onClick={() => setCurrectActiveTabs("users")}
          className={`px-9 py-2 text-sm font-medium  hover:cursor-pointer rounded-sm ${
            currActiveTabs === "users"
              ? "text-white bg-blue-400"
              : "text-gray-900 hover:text-white hover:bg-blue-400 bg-gray-100"
          }`}
        >
          Users
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center  p-0.5">
        <button
          onClick={() => setCurrectActiveTabs("groups")}
          className={`px-9 py-2 text-sm font-medium transition-colors hover:cursor-pointer  rounded-sm ${
            currActiveTabs === "groups"
              ? "text-white bg-blue-400"
              : "text-gray-900 hover:text-white hover:bg-blue-400 bg-gray-100"
          }`}
        >
          Groups
        </button>
      </div>
    </div>
  );
}
