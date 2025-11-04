import Header from "./Header";
import Chats from "./Chats";
import SendMessage from "./SendMessage";

const ActiveConversation = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden border-l border-gray-300 bg-[#F5F5F0]">
      <Header />
      <main className="flex-1 overflow-auto">
        <Chats />
      </main>
      <SendMessage />
    </div>
  );
};

export default ActiveConversation;
