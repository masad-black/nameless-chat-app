import { SearchIcon } from "@/app/assets/icons";

export default function SearchInput() {
  return (
    <div className="bg-[#f1f5f9] w-full max-w-5xl rounded-xl border border-[#E5E7EB] flex items-center space-x-1.5 py-3.5 px-4">
      <SearchIcon />
      <input
        type="text"
        name="search"
        placeholder="Search for users and groups..."
        className="w-full outline-0 border-0 text-sm"
      />
    </div>
  );
}
