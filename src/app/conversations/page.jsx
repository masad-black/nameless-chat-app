import ActiveConversation from "@/components/ActiveConversation";
import ConversationSidebar from "@/components/ConversationSidebar";

const Conversations = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <ConversationSidebar />
      <ActiveConversation />
    </div>
  );
};

export default Conversations;
