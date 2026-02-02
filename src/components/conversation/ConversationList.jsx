import { useUser } from "@/hooks";
import SkeletonLoader from "../SkeletonLoader";
import ConversationGroupItem from "./ConversationGroupItem";
import ConversationUserItem from "./ConversationUserItem";
import { useConversationContext } from "@/context";

export default function ConversationList() {
  const { userData } = useUser();
  const { userConversations, isLoading } = useConversationContext();

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex-1 overflow-auto  mb-20 space-y-1">
      {userConversations?.map((conversation) => {
        const member = conversation?.members?.filter((member) => member.user.id !== userData.id);
        if (conversation?.type === "direct") {
          // Direct item
          return (
            <ConversationUserItem
              key={conversation?.id}
              user={member.at(0).user}
              conversation={conversation}
            />
          );
        } else if (conversation?.type === "group") {
          // Group/Member item
          return <ConversationGroupItem key={conversation?.id} group={conversation} />;
        }
      })}
    </div>
  );
}
