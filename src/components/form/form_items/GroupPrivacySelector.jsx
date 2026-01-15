import { useState } from "react";

import { GlobeIcon, LockIcon } from "@/app/assets/icons";

export default function GroupPrivacySelector({ groupPrivacy, setGroupPrivacy }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-1">Group Privacy</h3>

      <div className="grid grid-cols-2 gap-4 ">
        {/* Public Option */}
        <div
          onClick={() => setGroupPrivacy("public")}
          className={`p-4 rounded-lg border-2 text-left transition-all ${
            groupPrivacy === "public"
              ? "border-green-400 bg-green-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <GlobeIcon
              className={`w-5 h-5 ${
                groupPrivacy === "public" ? "text-green-600" : "text-gray-600"
              }`}
            />
            <span
              className={`font-medium ${
                groupPrivacy === "public" ? "text-green-600" : "text-gray-900"
              }`}
            >
              Public
            </span>
          </div>
          <p className="text-sm text-gray-600">Anyone can discover and join the group</p>
        </div>

        {/* Private Option */}
        <div
          onClick={() => setGroupPrivacy("private")}
          className={`p-4 rounded-lg border-2 text-left transition-all ${
            groupPrivacy === "private"
              ? "border-red-400 bg-red-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <LockIcon
              className={`w-5 h-5 ${groupPrivacy === "private" ? "text-red-600" : "text-gray-600"}`}
            />
            <span
              className={`font-medium ${
                groupPrivacy === "private" ? "text-red-600" : "text-gray-900"
              }`}
            >
              Private
            </span>
          </div>
          <p className="text-sm text-gray-600">Only invited and requested members can join</p>
        </div>
      </div>
    </div>
  );
}
