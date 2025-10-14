import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // for https
});

// console.log("ENV CHECK:", {
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   has_secret: process.env.CLOUDINARY_API_SECRET,
// });

export default async function uploadImageToCloude(buffer, type) {
  try {
    let options = {
      resource_type: "auto",
      transformation: [
        { width: 400, height: 400, crop: "fill" }, // Resize image
        { quality: "auto" },
      ],
    };
    if (type.toLowerCase() === "user") {
      options = {
        folder: "chat-app/profiles",
        ...options,
      };
    } else if (type.toLowerCase() === "group") {
      options = {
        folder: "chat-app/groupProfiles",
        ...options,
      };
    } else if (type.toLowerCase() === "chat") {
    }

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(options, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    return uploadResult.secure_url;

    console.log("uplaod: ", uploadResult);
  } catch (error) {
    console.log("Error in uploading image to cloude: ", error);
    throw new Error();
  }
}
