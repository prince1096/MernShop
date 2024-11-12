import axios from "axios";
import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import "../App.css";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    const responseData = await axios.get(SummaryApi.allUser.url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (responseData.data.success) {
      setAllUsers(responseData.data.data);
    }

    if (responseData.data.error) {
      toast.error(responseData.data.message);
    }

    // console.log(responseData.data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div>
      <table className=" w-full  userTable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser?.map((element, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{element?.name}</td>
                <td>{element?.email}</td>
                <td>{element?.role}</td>
                <td>{moment(element?.createdAt).format("ll")}</td>
                <td>
                  <Link></Link>
                  <Link>
                    <MdDelete />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
