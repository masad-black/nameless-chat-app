"use client";

import Header from "./Header";
import Chats from "./Chats";
import SendMessage from "./SendMessage";
import { useConversationContext } from "@/context/conversation-context";

const ActiveConversation = () => {
  const { conversationHederDetails } = useConversationContext();
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
