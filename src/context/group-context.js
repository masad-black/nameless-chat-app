import { createContext, useContext, useState, useEffect } from "react";

import { getRandomGroups } from "@/utils/apis";

const GroupContext = createContext(null);

export function GroupProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [groupsList, setGroupsList] = useState([]);

  function updateIsLoading(val) {
    setIsLoading(val);
  }

  // getting random users
  // todo: get by lastOnline etc
  const getGroups = async () => {
    updateIsLoading(true);

    try {
      const res = await getRandomGroups();

      console.log("api group res: ", res);

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

  useEffect(() => {
    getGroups();
  }, []);

  const values = { groupsList, isLoading, getGroups };
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
