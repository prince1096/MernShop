import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  //   const dispatch = useDispatch();
  //   const [adminDisplay, setAdminDisplay] = useState(false);

  return (
    <div className="min-h-[calc(100vh-64px)] md:flex hidden ">
      <aside className="bg-white min-h-full w-full max-w-60 customShadow">
        <div className="h-32  flex justify-center items-center flex-col">
          <div
            className="text-5xl  cursor-pointer flex justify-center"
            // onClick={() => setAdminDisplay((prev) => !prev)}
          >
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                alt={user?.name}
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-sm">{user?.role}</p>
        </div>

        {/* Displaying all user and navigate */}

        <div>
          <nav className="grid p-4">
            <Link to={"all-users"} className="px-2 py-1 hover:bg-slate-100">
              All Users
            </Link>
            <Link to={"products"} className="px-2 py-1 hover:bg-slate-100">
              Products
            </Link>
          </nav>
        </div>
      </aside>

      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;