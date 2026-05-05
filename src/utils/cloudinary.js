import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const normalised = localFilePath.replace(/\\/g, "/"); // fix Windows paths

    const response = await cloudinary.uploader.upload(normalised, {
      resource_type: "auto",
    });

    console.log("File uploaded to Cloudinary:", response.url);
    fs.unlinkSync(localFilePath); // clean up temp file on success too
    return response;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.message);
    try {
      if (localFilePath) fs.unlinkSync(localFilePath);
    } catch (_) {
      console.log("failed to remove from local localFilePath");
    }
    return null;
  }
};

export { uploadOnCloudinary };
