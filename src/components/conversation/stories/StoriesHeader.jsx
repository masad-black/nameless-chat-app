import { useState } from "react";

import StoryItem from "./StoryItem";
import StoryUpload from "./StoryUpload";

export default function StoriesHeader() {
  const [uploadedStory, setUploadedStory] = useState();

  const stories = [
    { id: 1, name: "Marcus", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
    { id: 2, name: "Sarah", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { id: 3, name: "David", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
    { id: 4, name: "Elena", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" },
    { id: 5, name: "Amir", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amir" },
    { id: 6, name: "Zoe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe" },
    { id: 7, name: "Tom", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom" },
  ];

  return (
    <div className="bg-[#F6F8FB]  py-1.5 px-2 border-b border-gray-300">
      <div className="flex items-center gap-4 overflow-x-auto">
        {/* Your Story Uploader */}
        <StoryUpload setUploadedStory={setUploadedStory} />
        {/* Other People's Stories */}
        {stories.map((story) => (
          <StoryItem key={story.id} name={story.name} avatar={story.avatar} />
        ))}
      </div>
    </div>
  );
}
