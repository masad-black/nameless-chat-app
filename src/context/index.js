import { ConversationProvider, useConversationContext } from "./conversation-context";
import { UserProvider, useUserContext } from "./user-context";
import { GroupProvider, useGroupContext } from "./group-context";
import { useSocketContext, SocketProvider } from "./socket-context";

export default function AllContextProvider({ children }) {
  return (
    <SocketProvider>
      <UserProvider>
        <ConversationProvider>
          <GroupProvider>
            {/* {children} */}
            {children}
          </GroupProvider>
        </ConversationProvider>
      </UserProvider>
    </SocketProvider>
  );
}

export { useUserContext, useGroupContext, useConversationContext, useSocketContext };
