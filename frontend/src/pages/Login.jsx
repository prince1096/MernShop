import React, { useContext, useState } from "react";
import loginIcons from "../assest/assest/loginGif.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const generalContext = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(SummaryApi.logIn.url, loginData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    console.log(response.data);

    if (response.data.success) {
      toast.success(response.data.message);
      navigate("/");
      generalContext.fetchUserDetails();
    }

    if (response.data.error) {
      toast.error(response.data.error);
    }
  };

  return (
    <section id="login" className="mt-3 md:mt-5">
      <div className="container mx-auto p-4">
        <div className="bg-white p-5 py-5 w-full rounded max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto my-5">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="my-4">
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
                  value={loginData.email}
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="password">Password</label>
              <div className="bg-slate-100 p-2 flex items-center gap-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  id="password"
                  className="w-full h-full outline-none p-0.5 bg-slate-100"
                  name="password"
                  onChange={handleOnChange}
                  value={loginData.password}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-black"
              >
                Forgot Password
              </Link>
            </div>

            <button className="bg-black mx-auto block text-white rounded-full px-2 py-1  w-full max-w-[120px] mt-4 hover:scale-110 transition-all font-semibold">
              Login
            </button>
          </form>

          <p className="my-2 md:my-4">
            Don't have account ?{" "}
            <Link to="/signup" className="hover:underline hover:font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
