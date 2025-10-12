export default function UserListSkeleton({ count = 15 }) {
  return (
    <div className="w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-6 py-4 border-b border-gray-200 animate-pulse"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
          <div className="h-9 w-36 bg-gray-200 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
}

// Usage: <UserListSkeleton count={8} />
