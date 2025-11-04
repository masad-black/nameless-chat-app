"use client";

import { useState } from "react";
import Profile from "./Profile";
import { Search, Phone, Video, MoreHorizontal } from "lucide-react";

const ConversationSidebar = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Emma Wilson",
      message: "Hey! How's your day going?",
      time: "2:30 PM",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: false,
    },
    {
      id: 2,
      name: "Alex Johnson",
      message: "Thanks for the help earlier!",
      time: "1:45 PM",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: false,
    },
    {
      id: 3,
      name: "Design Team",
      message: "Mike: Let's review the mockups",
      time: "12:20 PM",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: true,
      isGroup: true,
    },
    {
      id: 4,
      name: "David Chen",
      message: "See you at the meeting!",
      time: "11:30 AM",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: false,
    },
    {
      id: 5,
      name: "Sophie Martin",
      message: "Perfect! Talk soon 👍",
      time: "Yesterday",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: false,
    },
    {
      id: 8,
      name: "Sophie Martin",
      message: "Perfect! Talk soon 👍",
      time: "Yesterday",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: false,
    },
    {
      id: 6,
      name: "Sophie Martin",
      message: "Perfect! Talk soon 👍",
      time: "Yesterday",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: false,
    },
    {
      id: 7,
      name: "Sophie Martin",
      message: "Perfect! Talk soon 👍",
      time: "Yesterday",
      avatar: "/api/placeholder/40/40",
      isOnline: false,
      unread: false,
    },
  ];

  return (
    <div className="relative w-md bg-white  border-gray-200 flex flex-col">
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
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => setSelectedConversation(conversation.id)}
            className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
              selectedConversation === conversation.id
                ? "bg-blue-50 border-r-2 border-blue-500"
                : ""
            }`}
          >
            {/* Avatar with Online Status */}
            <div className="relative mr-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              {conversation.isOnline && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
              {conversation.isGroup && (
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
              )}
            </div>

            {/* Conversation Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3
                  className={`text-sm font-medium truncate ${
                    selectedConversation === conversation.id
                      ? "text-gray-900"
                      : "text-gray-900"
                  }`}
                >
                  {conversation.name}
                </h3>
                <span
                  className={`text-xs ${
                    conversation.unread
                      ? "text-blue-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {conversation.time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm truncate ${
                    conversation.unread
                      ? "text-gray-900 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {conversation.message}
                </p>
                {conversation.unread && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 flex-shrink-0"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationSidebar;
