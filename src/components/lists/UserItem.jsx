import { SingleUserIcon } from "@/app/assets/icons";

export default function UserItem({ user }) {
  return (
    <button className="w-full flex items-center space-x-3 p-2 hover:bg-gray-100 hover:cursor-pointer transition-all border border-transparent group">
      <div className="relative">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.username}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-indigo-100 transition-all"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-indigo-700 flex items-center justify-center
             ring-2 ring-gray-100 group-hover:ring-indigo-100 transition-all"
          >
            <SingleUserIcon className="w-7 h-7 text-white" />
          </div>
        )}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>

      <div className="flex-1 text-left min-w-0">
        <div className="font-medium text-sm text-gray-900 truncate">{user.username}</div>
        <div className="text-xs text-gray-500 truncate">{user.bio}</div>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
