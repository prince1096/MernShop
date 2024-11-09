import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import Signup from "../pages/Signup";

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
    ],
  },
]);

export default router;
