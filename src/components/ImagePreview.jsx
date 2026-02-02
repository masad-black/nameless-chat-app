import { CancleIcon, SendMessageIcon } from "@/app/assets/icons";

export function ImagePreview({ imageUrl, onClose, onSend }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0  
    bg-black bg-opacity-95 z-50 flex flex-col rounded-sm overflow-hidden "
    >
      {/* Close Button - Top Right */}
      <div className="">
        <button onClick={onClose} className="p-2">
          <CancleIcon color={"#fff"} size={21} />
        </button>
      </div>

      {/* Image Preview - Center */}
      <div className="border flex items-center justify-between w-full h-full overflow-hidden p-1">
        <img src={imageUrl} alt="Preview" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
