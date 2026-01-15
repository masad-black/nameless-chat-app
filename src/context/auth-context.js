import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext(null);

export function AuthProvder({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const { data: session } = useSession();
    const user = session?.user;
    setUser();
  }, []);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    console.log("Can't use AuthContext outside AuthProvider");
    return;
  }
  return context;
}
