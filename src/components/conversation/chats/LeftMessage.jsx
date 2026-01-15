export function LeftMessage({ message }) {
  const time = new Date(message?.createdAt);

  return (
    <div className="flex items-start gap-2 mb-4">
      <img
        src={message?.avatar}
        alt="User"
        className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1"
      />
      <div className="flex flex-col max-w-[370px]">
        {message?.imageUrl && (
          <div className="mb-2">
            <img
              src={message?.imageUrl}
              alt="Received image"
              className="rounded-2xl max-w-full h-auto"
            />
          </div>
        )}
        {message && (
          <div className="bg-[#EEF2FF] text-gray-900 rounded-2xl rounded-tl-sm px-4 py-2.5">
            <p className="text-sm">{message?.content}</p>
          </div>
        )}
        <span className="text-xs text-gray-500 mt-1 ml-1">
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
