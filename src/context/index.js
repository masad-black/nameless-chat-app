import {
  ConversationProvider,
  useConversationContext,
} from "./conversation-context";
import { UserProvider, useUserContext } from "./user-context";
import { GroupProvider, useGroupContext } from "./group-context";

export default function AllContextProvider({ children }) {
  return (
    <UserProvider>
      <ConversationProvider>
        <GroupProvider>{children}</GroupProvider>
      </ConversationProvider>
    </UserProvider>
  );
}

export { useUserContext, useGroupContext, useConversationContext };
