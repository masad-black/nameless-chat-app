import { useConversationContext } from "@/context";
import Loader from "../Loader";

export default function Actions() {
  const { isLoading } = useConversationContext();

  return (
    <div className="w-full bg-[#F1F3F7] border-t border-gray-300 px-6 py-4 flex justify-end gap-4">
      {isLoading ? (
        <div className="mr-4">
          <Loader />
        </div>
      ) : (
        <>
          {/* Cancel Button */}
          <button
            type="reset"
            className="
          px-4 py-2
          text-sm font-normal
          text-gray-700
          bg-white
          border border-gray-300
          rounded-lg
          hover:bg-gray-100
          transition
        "
          >
            Reset Form
          </button>
          {/* Create Group Button */}
          <button
            type="submit"
            className="
          px-4 py-2
          text-sm font-normal
          text-white
          bg-indigo-600
          rounded-lg
          hover:bg-indigo-700
          transition
          "
          >
            Create Group
          </button>
        </>
      )}
    </div>
  );
}
