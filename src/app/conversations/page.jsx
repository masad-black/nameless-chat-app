import ActiveConversation from "@/components/ActiveConversation";
import ConversationSidebar from "@/components/ConversationSidebar";

const Conversations = () => {
  return (
    <div className="flex relative min-w-screen min-h-screen bg-red-400">
      <ConversationSidebar />
      <ActiveConversation />
    </div>
  );
};

export default Conversations;
