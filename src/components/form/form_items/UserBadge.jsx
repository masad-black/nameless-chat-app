import { CancleIcon } from "@/app/assets/icons";

export default function UserBadge({ user, onRemove }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#f1f5f9] rounded-full p-1 border border-gray-200">
      <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full object-cover" />
      <span className="text-xs text-gray-700 font-medium">{user.name}</span>
      <button
        onClick={() => onRemove(user.id)}
        className="rounded-full w-5 h-5  flex items-center justify-center transition-colors"
      >
        <button className="text-[10px]">
          <CancleIcon size={15} color={"#cdcdcd"} />
        </button>
      </button>
    </div>
  );
}
