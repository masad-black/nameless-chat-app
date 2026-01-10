"use client";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Paperclip, SmilePlus, Send } from "lucide-react";
import { useSession } from "next-auth/react";

import { useConversationContext, useSocketContext } from "@/context";

const SendMessage = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { conversationHederDetails, selectedConversation, updateSelectedConversationMessages } =
    useConversationContext();
  const { sendDirectRoomMessage } = useSocketContext();

  function handleClick() {
    sendDirectRoomMessage(
      message,
      "text",
      selectedConversation,
      conversationHederDetails?.userDetails?.id
    );

    const newMessage = {
      id: Math.round(Math.random() * 10000),
      content: message,
      type: "text",
      imageUrl: null,
      createdAt: Date.now(),
      senderId: user?.id,
    };

    // updateSelectedConversationMessages(newMessage);
  }

  return (
    <div className="flex items-center w-full p-3 space-x-6 bg-white border-t border-gray-300">
      <div>
        <label htmlFor="file" className="hover:cursor-pointer">
          <Paperclip size={20} />
        </label>
        <input type="file" name="file" id="file" className="hidden" />
      </div>
      <div className="relative flex items-center  flex-1 space-x-2 p-2 rounded-sm bg-stone-100">
        <input
          type="text"
          name=""
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full outline-0 border-0 p-0.5"
          placeholder="type a message..."
        />
        {isEmojiPickerOpen && (
          <EmojiPicker style={{ position: "absolute", bottom: 80, right: 5 }} />
        )}
        <SmilePlus
          size={20}
          onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
          className="hover:cursor-pointer"
        />
      </div>
      <button
        onClick={handleClick}
        className="bg-blue-600 flex items-center justify-between rounded-full hover:cursor-pointer"
      >
        <Send size={20} className="m-3" color="#fff" />
      </button>
    </div>
  );
};

export default SendMessage;
