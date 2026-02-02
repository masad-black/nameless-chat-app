import { FileUploadIcon } from "@/app/assets/icons";

export default function FileUpload({ setSelectedImage, setFile }) {
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="file" className="hover:cursor-pointer">
        <FileUploadIcon />
        {/* <Paperclip size={20} /> */}
      </label>
      <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageSelect}
      />
    </div>
  );
}
