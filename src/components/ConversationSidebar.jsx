"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Search, UsersRound, User } from "lucide-react";

import UserListSkeleton from "./SkeltenLoader";
import { useConversationContext } from "@/context/conversation-context";
import { useSocketContext } from "@/context";

const ConversationSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    userConversations,
    isLoading,
    selectedConversation,
    updateSelectedConversation,
    updateConversationHeaderDetails,
    conversationHederDetails,
    getSelectedConversationMessages,
  } = useConversationContext();
  const { joinDirectRoom } = useSocketContext();
  const { data: session, status, update } = useSession();
  const user = session?.user;

  // joinDirectRoom(
  //                     user?.id,
  //                     conversationHederDetails?.userDetails?.id
  //                   );

  return (
    <div className="relative w-md bg-white flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <UserListSkeleton count={8} />
        ) : (
          userConversations?.map((conversation) => {
            const member = conversation?.members?.at(0)?.user;

            if (conversation?.type === "direct") {
              // Direct item
              return (
                <div
                  key={conversation.id}
                  className={`p-1 flex items-center border border-gray-200 rounded-lg my-1 gap-3 flex-1 hover:cursor-pointer
                  ${
                    selectedConversation === conversation.id
                      ? "bg-gray-300 text-gray-600"
                      : "text-gray-400"
                  }`}
                  onClick={() => {
                    updateSelectedConversation(conversation.id);
                    updateConversationHeaderDetails(conversation);
                    getSelectedConversationMessages(conversation.id);
                  }}
                >
                  {member.profileImage === null ? (
                    <User className="w-12 h-12 rounded-full border-gray-200 border" />
                  ) : (
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-12 h-12 rounded-full border-gray-200 border"
                    />
                  )}
                  <div>
                    {/* <h3 className="font-medium text-gray-900">{user.name}</h3> */}
                    <p className="font-medium text-sm">@{member.username}</p>
                  </div>
                </div>
              );
            } else if (conversation?.type === "group") {
              // Group/Member item
              return (
                <div
                  key={conversation.id}
                  className={`p-1  flex items-center justify-between  border border-gray-200 rounded-lg my-1 hover:cursor-pointer ${
                    selectedConversation === conversation.id
                      ? "bg-gray-300 text-gray-600"
                      : "text-gray-400"
                  }`}
                  onClick={() => {
                    updateSelectedConversation(conversation.id);
                    updateConversationHeaderDetails(conversation);
                  }}
                >
                  <div className="relative flex items-center gap-3 flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center  text-xl font-semibold relative`}
                    >
                      {conversation.bannerImage === null ? (
                        <UsersRound className="w-12 h-12 rounded-full border-gray-200 border" />
                      ) : (
                        <img
                          src={conversation.bannerImage}
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full border-gray-200 border"
                        />
                      )}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-sm ">{conversation.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default ConversationSidebar;
