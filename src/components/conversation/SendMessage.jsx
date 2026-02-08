import { useEffect, useState } from "react";

import { useConversationContext, useSocketContext } from "@/context";
import { useUser } from "@/hooks";
import Input from "../Input";
import { SendMessageIcon } from "@/app/assets/icons";
import FileUpload from "./FileUpload";
import { ImagePreview } from "../ImagePreview";
// import uploadImageToCloude from "@/libs/cloudinary";

export default function SendMessage() {
  let timer;
  const { userData } = useUser();
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedFile, setFile] = useState();
  const {
    conversationHederDetails,
    selectedConversation,
    updateSelectedConversationMessages,
    stopTypingLoader,
  } = useConversationContext();
  const { sendMessage, showTypingLoader, sendImage } = useSocketContext();

  const sendTextMessage = (message, conversationId) => {
    sendMessage(message, "text", conversationId);

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

  const sendImageMessage = (file, conversationId) => {
    sendImage(file, "image", conversationId);
    const newMessage = {
      id: Math.round(Math.random() * 10000),
      content: message,
      type: "text",
      imageUrl: selectedImage,
      createdAt: Date.now(),
      senderId: userData?.id,
    };
    updateSelectedConversationMessages(newMessage);
  };

  async function handleClick(e) {
    /*
    - send messag when enter is pressend
    - also when clicked on the button
    - activate typing event
     */

    showTypingLoader(selectedConversation);
    // if (e.key === "Enter") {
    // this is for image
    if (selectedImage && selectedFile) {
      console.log("image url: ", selectedFile);
      sendImageMessage(selectedFile, selectedConversation);
      setSelectedImage();
      setFile();
    } else {
      if (message.length === 0) return;
      setMessage("");
      sendTextMessage(message, selectedConversation);
    }
  }
  // }

  const onPress = () => {
    console.log("clear timeout");

    window.clearTimeout(timer);
  };

  const onUp = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      stopTypingLoader();
    }, 1000);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

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
              // disabled={selectedImage && true}
              // onEnter={handleClick}
              onPress={onPress}
              onUp={onUp}
            />
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
