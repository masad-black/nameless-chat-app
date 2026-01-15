import Image from "next/image";

import { UsersIcon, GlobeIcon, LockIcon } from "@/app/assets/icons";

export default function GroupItem({ group }) {
  console.log("grups: ", group);

  const handleClick = () => {
    alert(`Clicked on group: ${group.name}`);
  };

  // <Image
  //   src={group.bannerImage}
  //   alt={group.name}
  //   className="object-cover w-10 h-10 transition-all rounded-full ring-2 ring-gray-100 group-hover:ring-indigo-100"
  //   width={100}
  //   height={100}
  // />

  return (
    <button
      onClick={handleClick}
      className="flex items-center w-full gap-3 p-2 border border-transparent hover:bg-gray-100 hover:cursor-pointer group"
    >
      <div className="relative flex-shrink-0">
        {group.bannerImage ? (
          <img
            src={group.bannerImage}
            alt={group.name}
            className="object-cover w-10 h-10 transition-all rounded-full ring-2 ring-gray-100 group-hover:ring-indigo-100"
          />
        ) : (
          <div
            className="flex items-center justify-center transition-all w-10 h-10 rounded-full bg-gradient-to-br
           from-purple-400 to-pink-400 ring-2 ring-gray-100 group-hover:ring-indigo-100"
          >
            <UsersIcon className="text-white w-7 h-7" />
          </div>
        )}
        <div className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm -bottom-1 -right-1">
          {group.isPublic ? (
            <GlobeIcon className="w-3.5 h-3.5 text-green-500" />
          ) : (
            <LockIcon className="w-3.5 h-3.5 text-red-500" />
          )}
        </div>
      </div>

      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900 truncate">{group.name}</span>
          {!group.isPublic && (
            <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
              Private
            </span>
          )}
        </div>
        <div className="text-xs text-gray-500 truncate">{group.bio}</div>
        <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
          <UsersIcon className="w-3.5 h-3.5" />
          <span className="text-xs">
            {group._count.members} {group._count.members <= 1 ? "member" : "members"}
          </span>
        </div>
      </div>

      <div className="transition-opacity opacity-0 group-hover:opacity-100">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50">
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
