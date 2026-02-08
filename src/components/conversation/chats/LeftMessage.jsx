import { SingleUserIcon } from "@/app/assets/icons";
import { useConversationContext } from "@/context";

export function LeftMessage({ message }) {
  const { typing } = useConversationContext();
  const time = new Date(message?.createdAt);

  return (
    <div className="flex items-start gap-2 mb-4 ">
      <div className="flex gap-x-1 max-w-[370px] ">
        <div className="flex flex-col mt-2.5">
          {message?.imageUrl && (
            <div className="mb-2">
              <img
                src={message?.imageUrl}
                alt="Sent image"
                className="rounded-2xl max-w-full h-auto"
              />
            </div>
          )}
          {!message?.imageUrl && (
            <div className="bg-gray-200 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-2.5">
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
    </div>
  );
}
