import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const upload =async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
   }
}

export default upload