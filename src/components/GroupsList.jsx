import Loader from "./SkeltenLoader";
import { useFetch } from "@/hooks/useFetch.js";
import { getGroups } from "@/utils/apis/groups.js";

import { UsersRound } from "lucide-react";

export default function GroupsList() {
  const { isLoading, error, data: groups } = useFetch(getGroups);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {groups?.length > 0 ? (
            groups?.map((group) => (
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
                        src={user.profileImage}
                        alt={user.name}
                        className="w-12 h-12 rounded-full border-gray-200 border"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{group.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{group.bio}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleStartConversation(user.id)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Join Them
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
