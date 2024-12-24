import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import Signup from "../pages/Signup";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import Products from "../pages/Products";
import EditUser from "../pages/EditUser";
import CategoryItem from "../pages/CategoryItem";
import ProductDetails from "../pages/ProductDetails";

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
        path: "product-category/:categoryName",
        element: <CategoryItem />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
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
          {
            path: "edit/:userId",
            element: <EditUser />,
          },
        ],
      },
    ],
  },
]);

export default router;
