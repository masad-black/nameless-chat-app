import { createContext, useContext, useState, useEffect } from "react";

import { getRandomGroups, joinGroup } from "@/utils/apis";
import { useConversationContext } from "./conversation-context.js";
import { useUser } from "@/hooks/useUser.js";

const GroupContext = createContext(null);

export function GroupProvider({ children }) {
  const { userData } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [groupsList, setGroupsList] = useState([]);
  const { setUserConversations, updateSelectedConversation } = useConversationContext();

  function updateIsLoading(val) {
    setIsLoading(val);
  }

  // getting random users
  // todo: get by lastOnline etc
  const getGroups = async () => {
    updateIsLoading(true);

    try {
      const res = await getRandomGroups();

      if (!res?.success) {
        setGroupsList([]);
        return;
      }

      setGroupsList(res?.data);
    } catch (error) {
      console.log("Error in getting users (user-context):", error);
    } finally {
      updateIsLoading(false);
    }
  };

  const addUserToGroup = async (conversationId) => {
    updateIsLoading(true);

    try {
      const res = await joinGroup(userData?.id, conversationId);

      setUserConversations((oldConv) => [res?.data?.conversation, ...oldConv]);
      updateSelectedConversation(res?.data?.conversation?.id);
    } catch (error) {
      console.log("Error in adding user to group (group-context) ", error);
    } finally {
      updateIsLoading(false);
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

  const values = { groupsList, isLoading, getGroups, addUserToGroup };
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
