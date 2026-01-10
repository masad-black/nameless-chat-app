"use client";

import { useSession } from "next-auth/react";
import { useEffect, useReducer, useRef } from "react";

import { useConversationContext, useSocketContext } from "@/context";
import { DIRECT_ROOM_EVENT } from "@/utils/constant";

const Chats = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const { selectedConversationsMessages, updateSelectedConversationMessages } =
    useConversationContext();
  const { socket } = useSocketContext();
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

  useEffect(() => {
    socket.on(DIRECT_ROOM_EVENT, handleSend);

    return () => {
      socket.off(DIRECT_ROOM_EVENT, handleSend);
    };
  }, []);

  useEffect(() => {
    // move the scrollbar automatically down
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [selectedConversationsMessages]);

  return (
    <div className="p-3">
      <ul ref={divRef} className="w-full">
        {selectedConversationsMessages?.map((chat) => {
          if (chat.senderId === user?.id) {
            return (
              //  Left side chat
              <li className="w-fit p-1 my-2 justify-self-end">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full overflow-hidden">
                    <img src="pic.jpeg" alt="" className="w-full h-full object-center" />
                  </div>
                  <p className="bg-white p-3 rounded-tr-sm rounded-br-sm rounded-bl-sm font-normal text-base">
                    {chat.content}
                  </p>
                </div>
                <p className="text-right font-normal text-sm mt-1">2:30PM</p>
              </li>
            );
          }
          // Right side chat
          else {
            return (
              <li className="w-fit p-1">
                <div className="flex items-center space-x-3">
                  <p className="bg-white p-3 rounded-bl-sm rounded-br-sm rounded-tl-sm font-normal text-base">
                    {chat.content}
                  </p>
                </div>
                <p className="text-right font-normal text-sm">2:30PM</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Chats;
