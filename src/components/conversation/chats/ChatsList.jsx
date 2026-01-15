import { useEffect, useRef } from "react";

import { useConversationContext, useSocketContext } from "@/context";
import { DIRECT_ROOM_EVENT } from "@/utils/constant";
import { useUser } from "@/hooks";
import { RightMessage } from "./RightMessage";
import { LeftMessage } from "./LeftMessage";

export default function ChatList() {
  const { userData } = useUser();
  const { selectedConversationsMessages, updateSelectedConversationMessages } =
    useConversationContext();
  // const { socket } = useSocketContext();
  const divRef = useRef();
  // console.log("messages in chat file: ", selectedConversationsMessages);

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

  // useEffect(() => {
  //   socket.on(DIRECT_ROOM_EVENT, handleSend);

  //   return () => {
  //     socket.off(DIRECT_ROOM_EVENT, handleSend);
  //   };
  // }, []);

  useEffect(() => {
    // move the scrollbar automatically down when new message is received
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [selectedConversationsMessages]);

  return (
    <div className="p-3">
      <ul ref={divRef} className="w-full">
        {selectedConversationsMessages?.map((chat) => {
          if (chat.senderId === userData?.id) {
            return <RightMessage key={chat?.id} message={chat} />;
          }
          // Right side chat
          else {
            return <LeftMessage key={chat?.id} message={chat} />;
          }
        })}
      </ul>
    </div>
  );
}
