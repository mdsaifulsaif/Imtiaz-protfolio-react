import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

import LoaddingSpinner from "../Components/LoaddingSpinner";
import Root from "../Pages/Root";
import NotFoundPage from "./../Pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    // hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
      },

      {
        path: "auth/register",
        Component: Register,
      },
      {
        path: "auth/login",
        Component: Login,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
