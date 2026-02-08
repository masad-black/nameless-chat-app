import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

import {
  CLIENT_CONNECTED_EVENT,
  CLIENT_ROOM_EVENT,
  DIRECT_ROOM_EVENT,
  JOIN_ROOM_EVENT,
  NEW_MESSAGE_EVENT,
  RECEIVED_CONVERSATION_EVENT,
  RECEIVED_MESSAGE_EVENT,
  STOP_TYPING_EVENT,
  TYPING_EVENT,
} from "@/utils/constant.js";
import { createNewMessage } from "@/utils/apis";
import { useUser } from "@/hooks";
import { useConversationContext } from "./conversation-context";

const URL = process.env.NEXT_PUBLIC_SOCKET_URL;

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const { userData, status } = useUser();
  const [socket, setSocket] = useState(null);
  // this will tell if the client is connected to the server
  const [isConnected, setConnected] = useState(false);

  const sendMessage = async (message, type, conversationId) => {
    const response = await createNewMessage(type, message, conversationId, userData?.id);

    // this event will send message to WS server
    socket.emit(NEW_MESSAGE_EVENT, { payload: response.data });
  };

  const sendImage = async (file, type, conversationId) => {
    const response = await createNewMessage(type, null, conversationId, userData?.id, file);

    socket.emit(NEW_MESSAGE_EVENT, { payload: response.data });
  };

  const showTypingLoader = (conversationId) => {
    socket.emit(TYPING_EVENT, { conversationId });
  };

  const joinRoomOnServer = (conversationId) => {
    socket.emit(JOIN_ROOM_EVENT, conversationId);
  };

  const listeningToConnection = (response, socketConnection) => {
    if (!response) {
      setConnected(false);
      setSocket(null);
    }
    setConnected(true);
    setSocket(socketConnection);
  };

  const isSocketConnected = () => (isConnected ? true : false);

  useEffect(() => {
    if (status === "unauthenticated" || userData === undefined) return;

    // creating a socket connection
    const socketConnection = io(URL, {
      auth: userData,
    });

    // this event is listening to the reponse of the server
    // that clinet is connected to the server or not
    socketConnection.on(CLIENT_CONNECTED_EVENT, ({ response }) =>
      listeningToConnection(response, socketConnection),
    );

    return () => {
      socketConnection.disconnect();
      socketConnection.close();
      socketConnection.off(CLIENT_CONNECTED_EVENT, listeningToConnection);
    };
  }, [status, userData]);

  // useEffect(() => {
  //   if (!socket || userData === undefined) return;

  //   socket.on(RECEIVED_MESSAGE_EVENT, listeningNewMessage);

  //   return () => {
  //     socket.off(RECEIVED_MESSAGE_EVENT, listeningNewMessage);
  //   };
  // }, [socket, userData]);

  const values = {
    socket,
    sendMessage,
    joinRoomOnServer,
    isConnected,
    isSocketConnected,
    showTypingLoader,
    sendImage,
  };
  return <SocketContext.Provider value={values}>{children}</SocketContext.Provider>;
}

export function useSocketContext() {
  const context = useContext(SocketContext);
  if (context === null) {
    console.log("No context is available!");
    return;
  }

  return context;
}
