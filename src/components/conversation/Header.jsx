import { MoreVertical } from "lucide-react";
import { useConversationContext } from "@/context/conversation-context";

export default function Header() {
  const { conversationHederDetails } = useConversationContext();
  const { userDetails } = conversationHederDetails;
  const isOnline = true;

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-[#F6F8FB]">
      {/* Left side - Avatar and Name */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={userDetails?.profileImage}
            alt={"profile_image"}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 text-base">
            {userDetails?.name || userDetails?.username || "Unknown"}
          </h2>
          {isOnline && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[11px] text-green-600 font-medium">Online</span>
            </div>
          )}
        </div>
      </div>

      {/* Right side - More Options */}
      <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}
