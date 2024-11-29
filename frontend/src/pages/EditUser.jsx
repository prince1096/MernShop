import React, { useEffect, useState } from "react";
import loginIcons from "../assest/assest/loginGif.gif";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRegImage } from "react-icons/fa6";
import imageTobase64 from "../helpers/imageTobase64";
import axios from "axios";
import { toast } from "react-toastify";

const EditUser = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const responseData = await axios.get(
        `http://localhost:8080/api/v1/admin/single-user/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (responseData.data.success) {
        setUserData(responseData.data.data);
      }
    } catch (error) {
      console.log("Error Fetching User Data", error);
    }
  };

  const handleUploadPic = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);

    setUserData((prev) => {
      return { ...prev, profilePic: imagePic };
    });
  };

  const handleOnChange = async (e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/admin/user/${userId}`,
        userData
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/admin-panel/all-users");
      }
      if (response.data.error) {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error in Updating details", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <section id="login" className="mt-3 md:mt-5">
        <div className="container mx-auto p-4">
          <div className="bg-white p-5 py-5 w-full rounded max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto my-5 relative cursor-pointer">
              <div>
                <img
                  src={userData?.profilePic || loginIcons}
                  alt="login icons"
                  className="w-full h-full rounded-full"
                />
              </div>
              <form>
                <label htmlFor="input">
                  <div className="absolute -bottom-1 -right-1 text-2xl bg-white rounded-full p-1">
                    <FaRegImage />
                  </div>
                  <input
                    type="file"
                    id="input"
                    className="hidden"
                    onChange={handleUploadPic}
                  />
                </label>
              </form>
            </div>

            <form onSubmit={handleOnSubmit}>
              <div className="mt-4">
                <label htmlFor="name" className="my-2">
                  Name :
                </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="name"
                    placeholder="enter name"
                    id="name"
                    className="w-full h-full outline-none p-0.5 bg-slate-100"
                    onChange={handleOnChange}
                    name="name"
                    value={userData.name}
                  />
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="email" className="my-2">
                  Email :
                </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="email"
                    placeholder="enter email"
                    id="email"
                    className="w-full h-full outline-none p-0.5 bg-slate-100"
                    name="email"
                    value={userData.email}
                  />
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="confirmPassword">Role : </label>
                <div className="bg-slate-100 p-2 flex items-center gap-1">
                  <select
                    id="role"
                    className="w-full h-full outline-none p-0.5 bg-slate-100"
                    name="role"
                    value={userData.role || "GENERAL"}
                    // onChange={(e) =>
                    //   setUserData({ ...userData, role: e.target.value })
                    // }
                    onChange={handleOnChange}
                  >
                    <option value="ADMIN">ADMIN</option>
                    <option value="GENERAL">GENERAL</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-green-400 hover:bg-green-600 mx-auto block text-white rounded-full px-2 py-1  w-full max-w-[120px] mt-4 hover:scale-110 transition-all font-semibold">
                  Update
                </button>

                <Link
                  to="/admin-panel/all-users"
                  className="bg-red-400 hover:bg-red-600 mx-auto block text-white rounded-full px-2 py-1  w-full max-w-[120px] mt-4 hover:scale-110 transition-all font-semibold text-center"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditUser;
