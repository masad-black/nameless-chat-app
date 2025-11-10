import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

import {
  getUserConversations,
  createDirectConversation,
  createGroupConversation,
} from "@/utils/apis";

export const ConversationContext = createContext(null);

export function ConversationProvider({ children }) {
  const { data: session } = useSession();
  const [isLoading, setLoading] = useState(false);
  const [conversationHederDetails, setConversationHeaderDetails] = useState({});
  const [userConversations, setUserConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const user = session?.user;

  // console.log("session in context: ", user);

  function updateLoading(val) {
    setLoading(val);
  }

  function updateSelectedConversation(conversationId) {
    setSelectedConversation(conversationId);
  }

  // this will give us the data based on the conversation type
  const updateConversationHeaderDetails = (details) => {
    // console.log("context details: ", details);
    if (Object.keys(details).length === 0) return;

    if (details.type === "direct") {
      const userDetails = details?.members.at(0).user;
      setConversationHeaderDetails(userDetails);
    } else if (details.type === "group") {
      const groupDetails = {
        profileImage: details.bannerImage,
        name: details.name,
        bio: details.bio,
      };
      setConversationHeaderDetails(groupDetails);
    }
  };

  // adding new conversation
  function addNewUserConversation() {}

  // get all user conversations direct, group, and member in group
  const getConversations = async () => {
    updateLoading(true);
    try {
      const res = await getUserConversations(user?.id);

      if (!res.success) {
        console.log("Something wrong in req");
        return;
      }

      setUserConversations([...res.data]);
    } catch (error) {
      console.log(
        "Error in getting conversations (conversation-context): ",
        error
      );
    } finally {
      updateLoading(false);
    }
  };

  // creating new conversation
  const createConversation = async (
    conversationType,
    createrId,
    convMemberId,
    groupName,
    groupBio,
    isPrivate,
    groupBanner
  ) => {
    updateLoading(true);

    try {
      updateLoading(true);
      // for creating direct(1 to 1) conversation
      if (conversationType.toLowerCase() === "direct") {
        const res = await createDirectConversation(
          conversationType,
          createrId,
          convMemberId
        );

        if (!res.success) {
          console.log("Something wrong in req");
          return;
        }

        updateSelectedConversation(res?.data?.id);
        setUserConversations((oldConv) => [res?.data, ...oldConv]);
      } else if (conversationType.toLowerCase() === "group") {
        // for creating group conversation
        const res = await createGroupConversation(
          conversationType,
          createrId,
          groupName,
          groupBio,
          isPrivate,
          groupBanner
        );

        console.log("response: ", res);

        updateSelectedConversation(res?.data?.id);
        setUserConversations((oldConv) => [res?.data, ...oldConv]);
      }
    } catch (error) {
      console.log(
        "Error in creating new conversation (conversation-context): ",
        error
      );
    } finally {
      updateLoading(false);
    }
  };

  useEffect(() => {
    if (user === undefined) return;

    // the data is already fetched
    if (userConversations.length > 0) return;

    getConversations();
  }, [user, userConversations, createConversation]);

  const value = {
    isLoading,
    userConversations,
    selectedConversation,
    conversationHederDetails,
    updateConversationHeaderDetails,
    updateSelectedConversation,
    addNewUserConversation,
    getConversations,
    createConversation,
  };

  return <ConversationContext value={value}>{children}</ConversationContext>;
}

export function useConversationContext() {
  const context = useContext(ConversationContext);
  if (context === undefined) return { message: "No context is available!" };

  return context;
}
