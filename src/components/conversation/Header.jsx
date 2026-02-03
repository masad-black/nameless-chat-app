import { MoreVertical } from "lucide-react";
import { useConversationContext } from "@/context/conversation-context";
import { SingleUserIcon } from "@/app/assets/icons";

export default function Header() {
  const { conversationHederDetails, typing } = useConversationContext();
  const { userDetails } = conversationHederDetails;
  const { groupDetails } = conversationHederDetails;

  const isOnline = true;

  // console.log("header detail: ", conversationHederDetails);

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-[#F6F8FB]">
      {/* Left side - Avatar and Name */}
      <div className="flex items-center gap-3">
        <div className="relative">
          {userDetails?.profileImage || groupDetails?.profileImage ? (
            <img
              src={userDetails?.profileImage || groupDetails?.profileImage}
              alt={"profile_image"}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : conversationHederDetails.type === "group" ? (
            <div
              className="flex items-center justify-center transition-all w-10 h-10 rounded-full bg-gradient-to-br
                       from-purple-400 to-pink-400 ring-2 ring-gray-100 group-hover:ring-indigo-100"
            >
              <UsersIcon className="text-white w-7 h-7" />
            </div>
          ) : (
            <div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-indigo-700 flex items-center justify-center
            ring-2 ring-gray-100 group-hover:ring-indigo-100 transition-all"
            >
              <SingleUserIcon className="w-7 h-7 text-white" />
            </div>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 text-base">
            {groupDetails?.name || userDetails?.username || "Unknown"}
          </h2>
          <div>
            {typing ? (
              <div className="flex items-center gap-1">
                <span className="text-[11px] text-green-600 font-medium">typing...</span>
              </div>
            ) : (
              <>
                {isOnline && (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[11px] text-green-600 font-medium">Online</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right side - More Options */}
      <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}
