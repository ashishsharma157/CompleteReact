import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NewPost, {action as PostAction} from "./routes/NewPost.jsx";
import PostDetails, {loader as PostDetailLoader} from "./routes/PostDetails.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Posts, { loader as PostLoader } from "./routes/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: PostLoader,
        children: [{ path: "/create-post", element: <NewPost />, action:PostAction },
          {path:'/:id', element:<PostDetails/>, loader: PostDetailLoader}
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
