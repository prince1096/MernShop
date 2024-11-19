import axios from "axios";

const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

const addImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "mern_shop");

  const responseData = await axios.post(url, formData);
  // const responseData = await fetch(url, {
  //   method: "post",
  //   body: formData,
  // });

  // console.log(responseData);
  return responseData;
  // return responseData.json();
};

export default addImage;
