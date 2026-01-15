// "use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export function useUser() {
  const [userData, setUserData] = useState({});
  const { data: session, status, update } = useSession();
  const user = session?.user;

  console.log("User details: ", userData);

  useEffect(() => {
    if (status === "authenticated") {
      setUserData(user);
    }
  }, [user, status]);

  return { userData, status };
}
