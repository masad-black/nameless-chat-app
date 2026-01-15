import { useState } from "react";

import { useConversationContext } from "@/context/conversation-context";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks";

export default function NewGroupForm({ setGroupForm }) {
  const { userData } = useUser();
  const router = useRouter();
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [groupBio, setGroupBio] = useState("");
  const { isLoading, createConversation } = useConversationContext();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await createConversation(
      "group",
      userData?.id,
      null,
      groupName,
      groupBio,
      isPrivate,
      selectedImageFile
    );

    router.push("/conversations");
  };

  return (
    <div className="absolute top-0 min-h-screen w-full bg-black/30 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800">Create New Group</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6" encType="multipart/form-data">
          {/* Image Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Group Image</label>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-gray-300 overflow-hidden flex items-center justify-center">
                {selectedImage ? (
                  <img src={selectedImage} alt="Group" className="w-full h-full object-cover" />
                ) : (
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
              <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium">Choose Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Group Name */}
          <div className="space-y-2">
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name..."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Privacy Toggle */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Group Privacy</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsPrivate(true)}
                className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-colors ${
                  isPrivate
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Public
              </button>
              <button
                type="button"
                onClick={() => setIsPrivate(false)}
                className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-colors ${
                  !isPrivate
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Private
              </button>
            </div>
          </div>

          {/* Group Bio */}
          <div className="space-y-2">
            <label htmlFor="groupBio" className="block text-sm font-medium text-gray-700">
              Group Bio
            </label>
            <textarea
              id="groupBio"
              value={groupBio}
              onChange={(e) => setGroupBio(e.target.value)}
              placeholder="Tell us about your group..."
              rows={5}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 resize-none"
              required
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="flex-1 py-2.5 px-4 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors hover:cursor-pointer"
              onClick={() => {
                setGroupForm(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center py-2.5 px-4 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              {isLoading ? (
                <div>
                  <Loader />
                </div>
              ) : (
                "Create Group"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
