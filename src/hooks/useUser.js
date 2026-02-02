import { useSession } from "next-auth/react";

export function useUser() {
  const { data: session, status, update } = useSession();
  const user = session?.user;

  return { userData: user, status };
}
