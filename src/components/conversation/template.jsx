import StoriesHeader from "./stories/StoriesHeader";
import ConversationSidebar from "./ConversationSidebar";
import ActiveConversation from "./ActiveConversation";
import { useConversationContext } from "@/context";

export default function ConversationTemplate() {
  const { selectedConversation } = useConversationContext();
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <StoriesHeader />
      <div className="flex h-full ">
        <ConversationSidebar />
        {selectedConversation && <ActiveConversation />}
      </div>
    </div>
  );
}
