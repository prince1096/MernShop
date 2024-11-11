import axios from "axios";
import React, { useEffect, useState } from "react";
import SummaryApi from "../common";

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    const responseData = await axios.get(SummaryApi.allUser.url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    console.log(responseData.data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return <div>AllUsers</div>;
};

export default AllUsers;
