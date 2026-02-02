import { createContext, useContext, useEffect, useState } from "react";

import { getRandomUsers, apiRequestHandler } from "@/utils/apis";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [usersList, setUsersList] = useState([]);

  const getUsers = async () => {
    await apiRequestHandler(
      getRandomUsers,
      setIsLoading,
      (data) => {
        setUsersList(data);
      },
      () => {
        setError(true);
      },
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  const values = { usersList, isLoading, error };
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
