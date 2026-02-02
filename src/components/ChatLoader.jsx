export default function ChatLoader({ count = 10 }) {
  return (
    <div className="w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-2 py-3 border-b border-gray-200 animate-pulse"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="flex justify-between gap-y-3  w-full">
              <div className="h-4 w-32 bg-gray-400 rounded"></div>
              <div className="h-4 w-32 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
