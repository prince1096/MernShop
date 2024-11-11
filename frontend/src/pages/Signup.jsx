import React, { useState } from "react";
import loginIcons from "../assest/assest/loginGif.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaRegImage } from "react-icons/fa6";
import imageTobase64 from "../helpers/imageTobase64";
import axios from "axios";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  // console.log(signUpData);
  // i am getting a problem high mb pic is not uploaded

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setSignUpData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (signUpData.password === signUpData.confirmPassword) {
        const response = await axios.post(SummaryApi.signUp.url, signUpData);
        console.log(response.data);

        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/login"); // redirect to login
        }

        if (response.data.error) {
          toast.error(response.data.message);
        }

        // // set form empty
        // setSignUpData({
        //   name: "",
        //   email: "",
        //   password: "",
        //   confirmPassword: "",
        //   profilePic: "",
        // });

        // or redirect to login
      } else {
        console.log("Please check password and confirm password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadPic = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);
    console.log(imagePic, "imagePic");

    setSignUpData((prev) => {
      return { ...prev, profilePic: imagePic };
    });
  };

  return (
    <section id="login" className="mt-3 md:mt-5">
      <div className="container mx-auto p-4">
        <div className="bg-white p-5 py-5 w-full rounded max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto my-5 relative cursor-pointer">
            <div>
              <img
                src={signUpData.profilePic || loginIcons}
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

          <form onSubmit={handleSubmit}>
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
                  value={signUpData.name}
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
                  onChange={handleOnChange}
                  name="email"
                  value={signUpData.email}
                />
              </div>
            </div>

            <div className="mt-2">
              <label htmlFor="password">Password : </label>
              <div className="bg-slate-100 p-2 flex items-center gap-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  id="password"
                  className="w-full h-full outline-none p-0.5 bg-slate-100"
                  name="password"
                  onChange={handleOnChange}
                  value={signUpData.password}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <label htmlFor="confirmPassword">Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex items-center gap-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  id="confirmPassword"
                  className="w-full h-full outline-none p-0.5 bg-slate-100"
                  name="confirmPassword"
                  onChange={handleOnChange}
                  value={signUpData.confirmPassword}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-black mx-auto block text-white rounded-full px-2 py-1  w-full max-w-[120px] mt-4 hover:scale-110 transition-all font-semibold">
              SignUp
            </button>
          </form>

          <p className="my-2 md:my-4">
            Alreday Have an account ?{" "}
            <Link
              to="/login"
              className="hover:underline hover:font-semibold01296"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
