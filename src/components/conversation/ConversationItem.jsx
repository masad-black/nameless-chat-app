import { SingleUserIcon } from "@/app/assets/icons";
import { useConversationContext } from "@/context";

export default function ConversationItem({ user, conversation }) {
  console.log("user: ", user);

  const {
    selectedConversation,
    updateSelectedConversation,
    updateConversationHeaderDetails,
    getSelectedConversationMessages,
  } = useConversationContext();
  const unreadCount = 3;

  function handleClick() {
    updateSelectedConversation(conversation.id);
    updateConversationHeaderDetails(conversation);
    getSelectedConversationMessages(conversation.id);
  }

  return (
    <div
      className={`flex items-center gap-3 p-3 ${
        selectedConversation === conversation?.id ? "bg-[#EEF2FF]" : "bg-white"
      } rounded-xl hover:bg-[#EEF2FF] transition-colors cursor-pointer `}
      onClick={handleClick}
    >
      <div className="flex-shrink-0">
        {user?.profileImage ? (
          <img
            src={user?.profileImage}
            alt={user?.username}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-indigo-700 flex items-center justify-center
                ring-2 ring-gray-100 group-hover:ring-indigo-100 transition-all"
          >
            <SingleUserIcon className="w-7 h-7 text-white" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-gray-900 text-sm truncate">{user?.username}</h3>
          {/* <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{time}</span> */}
          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">10:00 PM</span>
        </div>
        {/* <p className="text-sm text-gray-600 truncate">{message}</p> */}
        <p className="text-xs text-gray-600 truncate">Hey how are you!!</p>
      </div>

      {/* Unread Badge */}
      {unreadCount > 0 && (
        <div className="flex-shrink-0">
          <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-medium">{unreadCount}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// group

// <div
//   key={conversation.id}
//   className={`p-1  flex items-center justify-between  border border-gray-200 rounded-lg my-1 hover:cursor-pointer ${
//     selectedConversation === conversation.id
//       ? "bg-gray-300 text-gray-600"
//       : "text-gray-400"
//   }`}
//   onClick={() => {
//     updateSelectedConversation(conversation.id);
//     updateConversationHeaderDetails(conversation);
//   }}
// >
//   <div className="relative flex items-center gap-3 flex-1">
//     <div
//       className={`w-12 h-12 rounded-full flex items-center justify-center  text-xl font-semibold relative`}
//     >
//       {conversation.bannerImage === null ? (
//         <UsersRound className="w-12 h-12 rounded-full border-gray-200 border" />
//       ) : (
//         <img
//           src={conversation.bannerImage}
//           alt={conversation.name}
//           className="w-12 h-12 rounded-full border-gray-200 border"
//         />
//       )}
//       <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center">
//         <span className="text-white text-xs font-bold">G</span>
//       </div>
//     </div>

//     <div>
//       <div className="flex items-center space-x-2">
//         <h3 className="font-medium text-sm ">{conversation.name}</h3>
//       </div>
//     </div>
//   </div>
// </div>
