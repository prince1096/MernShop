import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import Signup from "../pages/Signup";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

export default router;
