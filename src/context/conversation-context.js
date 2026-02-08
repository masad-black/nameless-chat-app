import { createContext, useContext, useEffect, useState } from "react";

import {
  getUserConversations,
  createDirectConversation,
  createGroupConversation,
  getConversationMessages,
  apiRequestHandler,
} from "@/utils/apis";
import { useUser } from "@/hooks";
import { useSocketContext } from "@/context";
import {
  NEW_CONVERSATION_EVENT,
  RECEIVED_CONVERSATION_EVENT,
  RECEIVED_MESSAGE_EVENT,
  RECEIVED_STOP_TYPING_EVENT,
  SHOW_TYPING_EVENT,
  STOP_TYPING_EVENT,
} from "@/utils/constant";

export const ConversationContext = createContext(null);

export function ConversationProvider({ children }) {
  const { userData } = useUser();
  const [isLoading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [typingMember, setTypingMemebr] = useState();
  const [messagesLoader, setMessagesLoader] = useState(false);
  const [conversationHederDetails, setConversationHeaderDetails] = useState({});
  const [userConversations, setUserConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [selectedConversationsMessages, setSelectedConversationMessages] = useState([]);
  const { socket, isConnected } = useSocketContext();

  const updateLoading = (val) => {
    setLoading(val);
  };

  function updateSelectedConversation(conversationId) {
    setSelectedConversation(conversationId);
  }

  // this will give us the data based on the conversation type
  const updateConversationHeaderDetails = (details) => {
    // console.log("context details: ", details);
    if (Object.keys(details).length === 0) return;

    if (details.type === "direct") {
      const userDetails = details?.members.filter((member) => member.user.id !== userData.id);
      console.log("header details: ", userDetails);

      setConversationHeaderDetails({ userDetails: userDetails.at(0).user, type: "direct" });
    } else if (details.type === "group") {
      const groupDetails = {
        profileImage: details.bannerImage,
        name: details.name,
        bio: details.bio,
      };
      setConversationHeaderDetails({ groupDetails, type: "group" });
    }
  };

  const updateSelectedConversationMessages = (message) => {
    // console.log("In conversation context: ", selectedConversationsMessages, message);

    console.log("in updatin: ", message);
    setSelectedConversationMessages((oldCon) => [...oldCon, message]);
  };

  // get all user conversations direct, group, and member in group
  const getConversations = async () => {
    await apiRequestHandler(
      async () => {
        if (!userData?.id) return;
        return await getUserConversations(userData?.id);
      },
      setLoading,
      (data) => {
        setUserConversations(data);
      },
      () => {
        alert("something worng");
      },
    );
  };

  // creating new conversation
  const createConversation = async (
    conversationType,
    convMemberId,
    groupName,
    groupBio,
    isPrivate,
    groupBanner,
  ) => {
    // for creating direct(1 to 1) conversation
    if (conversationType.toLowerCase() === "direct") {
      await apiRequestHandler(
        async () => {
          if (!userData?.id) return;
          return await createDirectConversation(conversationType, userData?.id, convMemberId);
        },
        setLoading,
        (data) => {
          setUserConversations((oldConv) => [data, ...oldConv]);
          updateSelectedConversation(data?.id);
          updateConversationHeaderDetails(data);

          // this should be emitted
          if (isConnected && socket) {
            socket.emit(NEW_CONVERSATION_EVENT, { payload: data });
          }
        },
        () => {
          alert("something wrong!!");
        },
      );
    } else if (conversationType.toLowerCase() === "group") {
      await apiRequestHandler(
        async () => {
          if (!userData?.id) return;

          const formData = new FormData();
          formData.append("conversationType", conversationType);
          formData.append("createrId", userData?.id);
          formData.append("groupName", groupName);
          formData.append("groupBio", groupBio);
          formData.append("isPublic", isPrivate);
          formData.append("groupBanner", groupBanner);

          return await createGroupConversation(formData);
        },
        setLoading,
        (data) => {
          console.log("data: ", data);

          setUserConversations((oldConv) => [data, ...oldConv]);
          updateSelectedConversation(data?.id);
          updateSelectedConversation(data?.id);
          updateConversationHeaderDetails(data);
        },
        () => {
          alert("something wrong!!");
        },
      );
    }
  };

  const getSelectedConversationMessages = async (id) => {
    await apiRequestHandler(
      async () => {
        if (!id) return;
        return await getConversationMessages(id);
      },
      setMessagesLoader,
      (data) => {
        setSelectedConversationMessages(data);
      },
      () => {
        alert("something wrong");
      },
    );
  };

  const listeningNewMessage = (message) => {
    if (message.conversationId === selectedConversation) {
      updateSelectedConversationMessages(message);
    } else {
    }
  };

  const addConversationToList = (payload) => {
    setUserConversations((oldConv) => [payload, ...oldConv]);
    updateSelectedConversation(payload.id);
    updateConversationHeaderDetails(payload);
  };

  const listeningToTyping = ({ response, member }) => {
    if (response) {
      setTyping(true);
      setTypingMemebr(member);
    }
  };

  const stopTypingLoader = () => {
    socket.emit(STOP_TYPING_EVENT, selectedConversation);
  };

  const listeningToStopTyping = () => {
    setTyping(false);
  };

  useEffect(() => {
    if (!socket || !isConnected) {
      alert("Socket Not Connected to the Server!!!");
      return;
    }

    socket.on(RECEIVED_CONVERSATION_EVENT, addConversationToList);
    socket.on(RECEIVED_MESSAGE_EVENT, listeningNewMessage);
    socket.on(SHOW_TYPING_EVENT, listeningToTyping);
    socket.on(RECEIVED_STOP_TYPING_EVENT, listeningToStopTyping);

    return () => {
      socket.off(RECEIVED_CONVERSATION_EVENT, addConversationToList);
      socket.off(RECEIVED_MESSAGE_EVENT, listeningNewMessage);
      socket.off(SHOW_TYPING_EVENT, listeningToTyping);
      socket.off(RECEIVED_STOP_TYPING_EVENT, listeningToTyping);
    };
  }, [socket, isConnected, selectedConversation, typing]);

  useEffect(() => {
    if (userData === undefined) return;
    // // the data is already fetched
    // if (userConversations.length > 0) return;

    getConversations();
  }, [userData]);

  const value = {
    isLoading,
    typing,
    typingMember,
    userConversations,
    selectedConversation,
    conversationHederDetails,
    messagesLoader,
    selectedConversationsMessages,
    updateConversationHeaderDetails,
    updateSelectedConversation,
    getConversations,
    createConversation,
    setUserConversations,
    getSelectedConversationMessages,
    updateSelectedConversationMessages,
    stopTypingLoader,
  };

  return <ConversationContext value={value}>{children}</ConversationContext>;
}

export function useConversationContext() {
  const context = useContext(ConversationContext);
  if (context === undefined) return { message: "No context is available!" };

  return context;
}
