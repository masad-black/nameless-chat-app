export default function StoryItem({ name, avatar, hasStory = true }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer ">
      <div
        className={`relative ${
          hasStory
            ? "p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full"
            : ""
        }`}
      >
        <div className="bg-white p-0.5 rounded-full">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
      <span className="text-xs text-gray-700 font-medium">{name}</span>
    </div>
  );
}
