import {
  ConversationProvider,
  useConversationContext,
} from "./conversation-context";
import { UserProvider, useUserContext } from "./user-context";
import { GroupProvider, useGroupContext } from "./group-context";
import { useSocketContext, SocketProvider } from "./socket-context";

export default function AllContextProvider({ children }) {
  return (
    <UserProvider>
      <ConversationProvider>
        <GroupProvider>
          <SocketProvider>{children}</SocketProvider>
        </GroupProvider>
      </ConversationProvider>
    </UserProvider>
  );
}

export {
  useUserContext,
  useGroupContext,
  useConversationContext,
  useSocketContext,
};
