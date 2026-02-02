import { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import { useConversationContext, useSocketContext } from "@/context";
import { useUser } from "@/hooks";
import Input from "../Input";
import { EmojiIcon, SendMessageIcon } from "@/app/assets/icons";
import FileUpload from "./FileUpload";
import { ImagePreview } from "../ImagePreview";
// import uploadImageToCloude from "@/libs/cloudinary";

export default function SendMessage() {
  const { userData } = useUser();
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedFile, setFile] = useState();
  const { conversationHederDetails, selectedConversation, updateSelectedConversationMessages } =
    useConversationContext();
  const { sendMessage } = useSocketContext();

  const sendTextMessage = (messageDetails) => {
    // these deatils are required to send message to other user
    const { message, conversationId, receiverId } = messageDetails;
    sendMessage(message, "text", conversationId, receiverId);

    const newMessage = {
      id: Math.round(Math.random() * 10000),
      content: message,
      type: "text",
      imageUrl: null,
      createdAt: Date.now(),
      senderId: userData?.id,
    };
    updateSelectedConversationMessages(newMessage);
  };

  async function handleClick(e) {
    // send messag when enter is pressend
    // and when clicked on the button
    if (e.key === "Enter") {
      // this is for image
      if (selectedImage && selectedFile) {
        // const imageUrl = await uploadImageToCloude(selectedFile, "user");
        console.log("image url: ", imageUrl);

        // sendDirectRoomMessage(
        //   selectedImage,
        //   "image",
        //   selectedConversation,
        //   conversationHederDetails?.userDetails?.id
        // );
        setSelectedImage();
        setFile();
      } else {
        const messageDetails = {
          message,
          conversationId: selectedConversation,
          receiverId: conversationHederDetails?.userDetails?.id,
        };
        setMessage("");
        sendTextMessage(messageDetails);
      }
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex items-center justify-center mt-2.5">
        <div className="w-7xl flex items-center  bg-white  border border-gray-300 p-2 rounded-xl">
          <FileUpload setSelectedImage={setSelectedImage} setFile={setFile} />
          <div className="relative flex items-center  flex-1 space-x-2 p-2">
            <Input
              type={"text"}
              value={message}
              onChangeHandler={setMessage}
              placeholder={"Type your message..."}
              className={"w-full bg-transparent text-sm font-normal text-gray-800"}
              disabled={selectedImage && true}
              onEnter={handleClick}
            />
            {isEmojiPickerOpen && (
              <EmojiPicker style={{ position: "absolute", bottom: 50, right: 5 }} />
            )}
            <button onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}>
              <EmojiIcon />
            </button>
          </div>
          <button
            onClick={handleClick}
            className="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer"
          >
            <SendMessageIcon />
          </button>
        </div>
      </div>
      {selectedImage && (
        <ImagePreview imageUrl={selectedImage} onClose={() => setSelectedImage()} />
      )}
    </>
  );
}
