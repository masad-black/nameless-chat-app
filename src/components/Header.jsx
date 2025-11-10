import { EllipsisVertical } from "lucide-react";

const Header = ({ conversationHederDetails }) => {
  console.log("details in header: ", conversationHederDetails);

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-300 w-full px-3 py-3">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img
            src={conversationHederDetails?.profileImage}
            alt="active_user"
            className="w-full h-full object-center"
          />
        </div>
        <div>
          <h1 className="text-sm font-medium text-gray-900">
            {conversationHederDetails.name || conversationHederDetails.username}
          </h1>
          {/* <p className="font-normal text-sm text-green-500">Online</p> */}
        </div>
      </div>
      <EllipsisVertical />
    </div>
  );
};

export default Header;
