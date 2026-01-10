import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSession } from "next-auth/react";

import { DIRECT_ROOM_EVENT } from "@/utils/constant.js";
import { createNewMessage } from "@/utils/apis";

const URL = process.env.NEXT_PUBLIC_SOCKET_URL;

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const { data: session, status, update } = useSession();
  const user = session?.user;

  const sendDirectRoomMessage = async (message, type, conversationId, receiverId) => {
    const userIds = { initiatorId: user?.id, receiverId };

    // this event will send message to WS server
    socket.emit(DIRECT_ROOM_EVENT, { userIds, message });
    // and this api call will create this message in the DB
    const response = await createNewMessage(type, message, conversationId, userIds.initiatorId);
    // console.log("Api message response: ", response);
  };

  useEffect(() => {
    // creating a socket connection
    const socketConnection = io(URL, {
      withCredentials: true,
    });

    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
      // socket.off(DIRECT_ROOM_EVENT, sendDirectRoomMessage);
    };
  }, []);

  const values = { socket, sendDirectRoomMessage };
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
