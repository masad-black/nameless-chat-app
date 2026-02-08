import { useEffect, useRef } from "react";

import { useConversationContext } from "@/context";
import { useUser } from "@/hooks";
import { RightMessage } from "./RightMessage";
import { LeftMessage } from "./LeftMessage";
import ErrorMessage from "@/components/ErrorMessage";
import ChatLoader from "@/components/ChatLoader";

export default function ChatList() {
  const { userData } = useUser();
  const { selectedConversationsMessages, updateSelectedConversationMessages, messagesLoader } =
    useConversationContext();
  const divRef = useRef();

  function handleSend({ message, senderId }) {
    // console.log("receiving message: ", message, senderId);

    const newMessage = {
      id: Math.round(Math.random() * 10000),
      content: message,
      type: "text",
      imageUrl: null,
      createdAt: Date.now(),
      senderId,
    };

    updateSelectedConversationMessages(newMessage);
  }

  useEffect(() => {
    // move the scrollbar automatically down when new message is received
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [selectedConversationsMessages]);

  if (messagesLoader) {
    return <ChatLoader />;
  }

  if (selectedConversationsMessages?.length === 0) {
    return (
      <div className="flex justify-center">
        <ErrorMessage message={"Start conversaton by sending a message!!"} />
      </div>
    );
  }

  return (
    <div className="p-3">
      <ul ref={divRef} className="w-full">
        {selectedConversationsMessages?.map((chat) => {
          if (chat.senderId === userData?.id) {
            return <RightMessage key={chat?.id} message={chat} />;
          } else {
            return <LeftMessage key={chat?.id} message={chat} />;
          }
        })}
      </ul>
    </div>
  );
}
