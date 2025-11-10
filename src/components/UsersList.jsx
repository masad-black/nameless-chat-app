import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { User } from "lucide-react";

import SkeltenLoader from "./SkeltenLoader";
import Loader from "./Loader";
import { useConversationContext, useUserContext } from "@/context";

export default function UsersList({ searchedUserList }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const { createConversation, isLoading: loader } = useConversationContext();
  const { isLoading, usersList } = useUserContext();

  const allUsers = [...searchedUserList, ...(usersList || [])];

  const handleStartConversation = async (memberId) => {
    setSelectedConversation(memberId);

    // 1: make the api call to add this conversation into DB
    await createConversation("direct", session.user.id, memberId);

    // 2: redirect to conversations page
    router.push("/conversations");
  };

  return (
    <div>
      {isLoading ? (
        <SkeltenLoader />
      ) : (
        <>
          {allUsers?.length > 0 ? (
            allUsers?.map((user) => {
              if (user.id === session.user.id) return;
              return (
                <div
                  key={user.id}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between border-gray-200 border rounded-lg my-1"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {user.profileImage === null ? (
                      <User className="w-12 h-12 rounded-full border-gray-200 border" />
                    ) : (
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-12 h-12 rounded-full border-gray-200 border"
                      />
                    )}
                    <div>
                      {/* <h3 className="font-medium text-gray-900">{user.name}</h3> */}
                      <p className="font-medium text-sm text-gray-700">
                        @{user.username}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleStartConversation(user.id)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {selectedConversation === user.id
                      ? loader && <Loader />
                      : "Start Conversation"}
                  </button>
                </div>
              );
            })
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              No users found
            </div>
          )}
        </>
      )}
    </div>
  );
}
