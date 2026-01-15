import { CancleIcon } from "@/app/assets/icons";

export default function Header({ onClick }) {
  return (
    <div className="bg-white flex items-center justify-between px-6 py-4 border-b border-gray-300">
      <h1 className="font-medium text-xl">Create New Group</h1>
      <button onClick={onClick}>
        <CancleIcon />
      </button>
    </div>
  );
}
