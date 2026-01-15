import StoriesHeader from "./stories/StoriesHeader";
import ConversationSidebar from "./ConversationSidebar";
import ActiveConversation from "./ActiveConversation";

export default function ConversationTemplate() {
  return (
    <div className=" w-screen h-screen overflow-hidden bg-red-400">
      <StoriesHeader />
      <div className="flex h-full bg-green-200">
        <ConversationSidebar />
        <ActiveConversation />
      </div>
    </div>
  );
}
