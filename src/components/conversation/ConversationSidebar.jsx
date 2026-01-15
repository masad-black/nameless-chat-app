import ConversationList from "./ConversationList";

const ConversationSidebar = () => {
  return (
    <div className="relative w-full max-w-[370px] bg-white flex flex-col px-2 py-1 border-r  border-gray-300">
      <div className="py-3.5">
        <h1 className="text-2xl font-semibold">Messages</h1>
      </div>
      <ConversationList />
    </div>
  );
};

export default ConversationSidebar;
