"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import Header from "./Header";
import Chats from "./Chats";
import SendMessage from "./SendMessage";
import { useConversationContext } from "@/context/conversation-context";
import { useSocketContext } from "@/context";
import {
  newMessageEvent,
  DIRECT_ROOM_EVENT,
  GROUP_ROOM_EVENT,
  DIRECT_ROOM_NAME,
} from "@/utils/constant.js";

const ActiveConversation = () => {
  const { conversationHederDetails } = useConversationContext();
  const { socket } = useSocketContext();

  // console.log("socket in active conversation: ", user);

  useEffect(() => {}, [
    socket.on(DIRECT_ROOM_EVENT, (message) => {
      console.log("Listening Direct Messages on CS: ", message);
    }),
  ]);

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden border-l border-gray-300 bg-[#F5F5F0]">
      <Header conversationHederDetails={conversationHederDetails} />
      <main className="flex-1 overflow-auto">
        <Chats />
      </main>
      <SendMessage />
    </div>
  );
};

export default ActiveConversation;
