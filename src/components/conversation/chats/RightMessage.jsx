export function RightMessage({ message }) {
  const time = new Date(message?.createdAt);
  return (
    <div className="flex justify-end mb-4">
      <div className="flex flex-col items-end max-w-[370px]">
        {message?.imageUrl && (
          <div className="mb-2">
            <img
              src={message?.imageUrl}
              alt="Sent image"
              className="rounded-2xl max-w-full h-auto"
            />
          </div>
        )}
        {message && (
          <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5">
            <p className="text-sm">{message?.content}</p>
          </div>
        )}
        <span className="text-xs text-gray-500 mt-1 mr-1">
          {time.toLocaleString("en-us", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
      </div>
    </div>
  );
}
