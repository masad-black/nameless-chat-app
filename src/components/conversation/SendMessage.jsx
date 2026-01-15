import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Paperclip, SmilePlus, Send } from "lucide-react";

import { useConversationContext, useSocketContext } from "@/context";
import { useUser } from "@/hooks";
import Input from "../Input";
import { EmojiIcon, SendMessageIcon } from "@/app/assets/icons";
import FileUpload from "./FileUpload";

export default function SendMessage() {
  const { userData } = useUser();
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
      senderId: userData?.id,
    };

    // updateSelectedConversationMessages(newMessage);
  }

  return (
    <div className="flex items-center justify-center mt-2.5">
      <div className="w-7xl flex items-center  bg-white  border border-gray-300 p-2 rounded-xl">
        <FileUpload />
        <div className="relative flex items-center  flex-1 space-x-2 p-2">
          <Input
            type={"text"}
            value={message}
            onChangeHandler={setMessage}
            placeholder={"Type your message..."}
            className={"w-full bg-transparent text-sm font-normal text-gray-800"}
          />
          {isEmojiPickerOpen && (
            <EmojiPicker style={{ position: "absolute", bottom: 80, right: 5 }} />
          )}
          <EmojiIcon />
        </div>
        <button
          onClick={handleClick}
          className="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer"
        >
          <SendMessageIcon />
        </button>
      </div>
    </div>
  );
}

{
  /* <input
  type="text"
  name=""
  id=""
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full outline-0 border-0 p-0.5"
  placeholder="type a message..."
        <Send size={20} className="m-3" color="#fff" />

/>; */
}

{
  /* <SmilePlus
  size={20}
  onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
  className="hover:cursor-pointer"
/>; */
}
