import { FileUploadIcon } from "@/app/assets/icons";

export default function FileUpload() {
  return (
    <div>
      <label htmlFor="file" className="hover:cursor-pointer">
        <FileUploadIcon />
        {/* <Paperclip size={20} /> */}
      </label>
      <input type="file" name="file" id="file" className="hidden" />
    </div>
  );
}
