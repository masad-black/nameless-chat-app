import Header from "./Header";
import SendMessage from "./SendMessage";
import ChatsList from "./chats/ChatsList";

const ActiveConversation = () => {
  return (
    <div className="flex flex-col w-full   overflow-hidden flex-1 bg-[#F6F8FB]">
      <Header />
      <main className="h-[76%] overflow-auto">
        <ChatsList />
      </main>
      <SendMessage />
    </div>
  );
};

export default ActiveConversation;
