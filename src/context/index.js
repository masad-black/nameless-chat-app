import {
  ConversationProvider,
  useConversationContext,
} from "./conversation-context";
import { UserProvider, useUserContext } from "./user-context";
import { GroupProvider, useGroupContext } from "./group-context";

export default function AllContextProvider({ children }) {
  return (
    <UserProvider>
      <GroupProvider>
        <ConversationProvider>{children}</ConversationProvider>
      </GroupProvider>
    </UserProvider>
  );
}

export { useUserContext, useGroupContext, useConversationContext };
