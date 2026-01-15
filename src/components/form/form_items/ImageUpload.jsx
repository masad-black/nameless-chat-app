import { CameraIcon } from "@/app/assets/icons";
import { useState } from "react";

export default function ImageUpload({ image, setImage }) {
  const [errorMessage, setErrorMessage] = useState();

  function handleUpload(e) {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Only images are allowed");
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="w-full p-6 flex items-center flex-col gap-y-5 justify-center">
      <label
        htmlFor="image-upload"
        className="
          w-36 h-36
          flex flex-col items-center justify-center overflow-hidden
          rounded-full
          border-2 border-dashed border-gray-300
          bg-gray-50
          text-gray-500
          cursor-pointer
          hover:border-green-500
          hover:text-green-700
          transition
        "
      >
        {image ? (
          <img src={image} alt="user_profile_image" className="w-full h-full object-cover" />
        ) : (
          <>
            <CameraIcon />
            <span className="mt-2 text-xs font-medium">Upload Image</span>
          </>
        )}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
      </label>
      <p className="text-red-300 text-xs">{errorMessage}</p>
    </div>
  );
}
