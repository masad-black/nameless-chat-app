import { createContext, useContext, useEffect, useState } from "react";

import { getRandomUsers } from "@/utils/apis/users";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);

  function updateIsLoading(val) {
    setIsLoading(val);
  }

  // getting random users
  // todo: get by lastOnline etc
  const getUsers = async () => {
    updateIsLoading(true);

    try {
      const res = await getRandomUsers();

      if (!res?.success) {
        setUsersList([]);
        return;
      }

      setUsersList(res?.data);
    } catch (error) {
      console.log("Error in getting users (user-context):", error);
    } finally {
      updateIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const values = { usersList, isLoading, getUsers };
  return <UserContext value={values}>{children}</UserContext>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    console.log("No context is available!");
    return;
  }

  return context;
}
