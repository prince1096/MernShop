import axios from "axios";

const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

const addImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset");

  const responseData = await axios.post(url);
};

export default addImage;
