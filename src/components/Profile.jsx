"use client";

import { useSession } from "next-auth/react";

import { Settings } from "lucide-react";

export default function Profile() {
  const { data: session, state } = useSession();
  console.log(session);
  console.log(state);

  return (
    <div className="flex justify-between items-center absolute bottom-0 right-0 border-gray-200 border rounded-lg mb-0.5 w-full p-1 px-2">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          src={session?.user?.profileImage}
          alt={session?.user?.name}
          className="w-full h-fit object-cover "
        />
      </div>
      <Settings />
    </div>
  );
}
