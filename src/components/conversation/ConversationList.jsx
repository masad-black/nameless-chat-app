import SkeletonLoader from "../SkeletonLoader";
import ConversationItem from "./ConversationItem";
import { useConversationContext } from "@/context";

export default function ConversationList() {
  const { userConversations, isLoading } = useConversationContext();

  const users = [
    { username: "alex_morgan", profileImage: "https://i.pravatar.cc/150?img=1" },
    { username: "sarah_k", profileImage: "https://i.pravatar.cc/150?img=2" },
    { username: "john_doe", profileImage: "https://i.pravatar.cc/150?img=3" },
    { username: "emma_w", profileImage: "https://i.pravatar.cc/150?img=4" },
    { username: "daniel_r", profileImage: "https://i.pravatar.cc/150?img=5" },
    { username: "olivia_s", profileImage: "https://i.pravatar.cc/150?img=6" },
    { username: "mike_thompson", profileImage: "https://i.pravatar.cc/150?img=7" },
    { username: "lucas_p", profileImage: "https://i.pravatar.cc/150?img=8" },
    { username: "nina_k", profileImage: "https://i.pravatar.cc/150?img=9" },
    { username: "ryan_lee", profileImage: "https://i.pravatar.cc/150?img=10" },

    { username: "chris_evans", profileImage: "https://i.pravatar.cc/150?img=11" },
    { username: "anna_m", profileImage: "https://i.pravatar.cc/150?img=12" },
    { username: "kevin_b", profileImage: "https://i.pravatar.cc/150?img=13" },
    { username: "lily_chen", profileImage: "https://i.pravatar.cc/150?img=14" },
    { username: "omar_h", profileImage: "https://i.pravatar.cc/150?img=15" },
    { username: "fatima_z", profileImage: "https://i.pravatar.cc/150?img=16" },
    { username: "james_walker", profileImage: "https://i.pravatar.cc/150?img=17" },
    { username: "sophia_l", profileImage: "https://i.pravatar.cc/150?img=18" },
    { username: "ethan_p", profileImage: "https://i.pravatar.cc/150?img=19" },
    { username: "noah_smith", profileImage: "https://i.pravatar.cc/150?img=20" },

    { username: "zoe_adams", profileImage: "https://i.pravatar.cc/150?img=21" },
    { username: "adam_khan", profileImage: "https://i.pravatar.cc/150?img=22" },
    { username: "hannah_j", profileImage: "https://i.pravatar.cc/150?img=23" },
    { username: "ali_raza", profileImage: "https://i.pravatar.cc/150?img=24" },
    { username: "victor_n", profileImage: "https://i.pravatar.cc/150?img=25" },
    { username: "maya_patel", profileImage: "https://i.pravatar.cc/150?img=26" },
    { username: "julia_b", profileImage: "https://i.pravatar.cc/150?img=27" },
    { username: "leo_martin", profileImage: "https://i.pravatar.cc/150?img=28" },
    { username: "irene_s", profileImage: "https://i.pravatar.cc/150?img=29" },
    { username: "tom_harris", profileImage: "https://i.pravatar.cc/150?img=30" },
  ];

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex-1 overflow-auto  mb-20">
      {userConversations?.map((conversation) => {
        const member = conversation?.members?.at(0)?.user;
        if (conversation?.type === "direct") {
          // Direct item
          return (
            <ConversationItem key={conversation?.id} user={member} conversation={conversation} />
          );
        } else if (conversation?.type === "group") {
          // Group/Member item
          return <div>group</div>;
        }
      })}
    </div>
  );
}
