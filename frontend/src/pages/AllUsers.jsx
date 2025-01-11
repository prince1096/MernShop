import axios from "axios";
import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import "../App.css";
import moment from "moment/moment";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
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

    // console.log(responseData.data);

    if (responseData?.data?.success) {
      setAllUsers(responseData.data.data);
    }

    if (responseData.data.error) {
      toast.error(responseData.data.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="bg-white pb-4">
      <table className="w-full bg-white userTable">
        <thead>
          <tr className="bg-black text-white">
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
              <tr key={index}>
                <td className="tdcenter">{index + 1}</td>
                <td className="tdcenter">{element?.name}</td>
                <td>{element?.email}</td>
                <td>{element?.role}</td>
                <td>{moment(element?.createdAt).format("ll")}</td>
                <td>
                  {element?.role === "GENERAL" && (
                    <div>
                      <Link
                        to={`/admin-panel/edit/${element?._id}`}
                        role="button"
                        className="bg-green-200 p-2 m-1 rounded-full cursor-pointer hover:bg-green-500 hover:text-white inline-block text-center no-underline"
                      >
                        <MdModeEdit />
                      </Link>

                      <Link
                        to="/delete"
                        role="button"
                        className="bg-green-200 p-2 m-1 rounded-full cursor-pointer hover:bg-green-500 hover:text-white inline-block text-center no-underline"
                      >
                        <MdDelete />
                      </Link>
                    </div>
                  )}
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
