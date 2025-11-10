"use client";
import EmptyState from "@/components/EmptyChat";
import ActiveConversation from "@/components/ActiveConversation";
import ConversationSidebar from "@/components/ConversationSidebar";

import { useConversationContext } from "@/context/conversation-context";

const Conversations = () => {
  const { selectedConversation } = useConversationContext();

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <ConversationSidebar />
      {selectedConversation ? <ActiveConversation /> : <EmptyState />}
    </div>
  );
};

export default Conversations;
