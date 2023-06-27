import axios from "axios";
import newRequest from "./newRequest";

const uploadImage = async (file: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "us9wqidv");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dfsgz2gnb/upload",
      formData
    );
    const {url} =res.data
    return url
  } catch (error) {
    console.log(error);
  }
};

export default uploadImage;
