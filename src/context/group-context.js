import { createContext, useContext, useState, useEffect } from "react";

import { getRandomGroups, joinGroup, apiRequestHandler } from "@/utils/apis";
import { useConversationContext } from "./conversation-context.js";
import { useUser } from "@/hooks/useUser.js";

const GroupContext = createContext(null);

export function GroupProvider({ children }) {
  const { userData } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [groupsList, setGroupsList] = useState([]);
  const { setUserConversations, updateSelectedConversation, updateConversationHeaderDetails } =
    useConversationContext();

  const getGroups = async () => {
    await apiRequestHandler(
      getRandomGroups,
      setIsLoading,
      (data) => setGroupsList(data),
      () => setError(true),
    );
  };

  const addUserToGroup = async (conversationId) => {
    apiRequestHandler(
      async () => {
        if (!userData.id) return;
        return await joinGroup(userData?.id, conversationId);
      },
      setIsLoading,
      (data) => {
        setUserConversations((oldConv) => [data?.conversation, ...oldConv]);
        updateSelectedConversation(data?.conversation?.id);
        updateConversationHeaderDetails(data.conversation);
      },
      () => {
        alert("somethign wrong");
      },
    );
  };

  useEffect(() => {
    getGroups();
  }, []);

  const values = { groupsList, isLoading, getGroups, addUserToGroup, error };
  return <GroupContext value={values}>{children}</GroupContext>;
}

export function useGroupContext() {
  const context = useContext(GroupContext);
  if (context === undefined) {
    console.log("No context is available!");
    return;
  }

  return context;
}
