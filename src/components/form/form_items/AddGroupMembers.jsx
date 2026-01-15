import { useState } from "react";

import UserBadge from "./UserBadge";

export default function AddGroupMembers({ setGroupMemberIds }) {
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Fake users data
  const availableUsers = [
    { id: 1, name: "Priya Patel", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
    {
      id: 2,
      name: "Marcus Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    { id: 3, name: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    {
      id: 4,
      name: "Ahmed Hassan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    },
    {
      id: 5,
      name: "Emma Williams",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    { id: 6, name: "David Kim", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
    {
      id: 7,
      name: "Sofia Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
    },
    {
      id: 8,
      name: "James Anderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
  ];

  const handleSelectUser = (e) => {
    const userId = parseInt(e.target.value);
    if (!userId) return;

    const user = availableUsers.find((u) => u.id === userId);
    if (user && !selectedUsers.find((u) => u.id === userId)) {
      setSelectedUsers([...selectedUsers, user]);
    }
    e.target.value = "";
  };

  const handleRemoveUser = (userId) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== userId));
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-1">Add Group Members</h3>
      <select
        onChange={handleSelectUser}
        className="w-full px-4 py-2.5 bg-[#f1f5f9] border border-gray-200 rounded-lg text-gray-600
         outline-0 cursor-pointer"
        defaultValue=""
      >
        <option className="" disabled>
          <p className="text-sm font-normal">Select users...</p>
        </option>
        {availableUsers
          .filter((user) => !selectedUsers.find((u) => u.id === user.id))
          .map((user) => (
            <option key={user.id} value={user.id} className="text-xs font-medium">
              {user.name}
            </option>
          ))}
      </select>

      {selectedUsers.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedUsers.map((user) => (
            <UserBadge key={user.id} user={user} onRemove={handleRemoveUser} />
          ))}
        </div>
      )}
    </div>
  );
}
