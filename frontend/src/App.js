// import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const responseData = await axios.get(SummaryApi.currentUser.url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log(responseData.data);

    if (responseData.data.success) {
      dispatch(setUserDetails(responseData.data.data));
    }
  };
  useEffect(() => {
    // user Details
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails,
        }}
      >
        <ToastContainer />
        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
      </Context.Provider>
    </>
  );
}

export default App;
