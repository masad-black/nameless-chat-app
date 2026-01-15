import { PlusIcon } from "@/app/assets/icons";

export default function StoryUpload({ setUploadedStory }) {
  function handleUpload(e) {
    const file = e.target.files[0];

    console.log("file: ", e.target);

    if (!file.type.startsWith("video/")) {
      setErrorMessage("Only videos are allowed");
    }

    const reader = new FileReader();

    reader.onload = () => {
      setUploadedStory(reader.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className="flex flex-col items-center justify-center gap-1 flex-shrink-0">
      <label htmlFor="story-upload" className="relative cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=You"
            alt="Your Story"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
          <PlusIcon />
          <input
            type="file"
            id="story-upload"
            className="hidden"
            accept="video/*"
            onChange={handleUpload}
          />
        </div>
      </label>
      <span className="text-xs text-gray-700 font-medium">Your Story</span>
    </div>
  );
}
