import { UsersRound } from "lucide-react";

import Loader from "./SkeltenLoader";
import { useGroupContext } from "@/context";

export default function GroupsList() {
  const { isLoading, groupsList } = useGroupContext();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {groupsList?.length > 0 ? (
            groupsList?.map((group) => (
              <div
                key={group.id}
                className="px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between border-gray-200 border rounded-lg my-1"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center  text-xl font-semibold relative`}
                  >
                    {group.bannerImage === null ? (
                      <UsersRound className="w-12 h-12 rounded-full border-gray-200 border" />
                    ) : (
                      <img
                        src={group.bannerImage}
                        alt={group.name}
                        className="w-12 h-12 rounded-full border-gray-200 border"
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-lg text-gray-700">
                        {group.name}
                      </h3>
                      {group.isPublic ? (
                        <span className="flex items-center justify-center px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-md">
                          Public
                        </span>
                      ) : (
                        <span className="flex items-center justify-center px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded-md">
                          Private
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>
                        {group.bio.length > 200
                          ? group.bio.slice(0, 200)
                          : group.bio}
                        ...
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleStartConversation(user.id)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {group.isPublic ? "Join Them" : "Join Request"}
                </button>
              </div>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              No groups found
            </div>
          )}
        </>
      )}
    </div>
  );
}
