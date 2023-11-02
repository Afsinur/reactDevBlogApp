import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./About";
import BlogDetails from "./BlogDetails";
import AddBlog from "./AddBlog";
import Contactus from "./Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetails />,
  },
  {
    path: "/add-blog",
    element: <AddBlog />,
  },
  {
    path: "/contact-us",
    element: <Contactus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
