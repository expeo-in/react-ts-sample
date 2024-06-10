import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import SampleCounter from "./components/SampleCounter";
import PostList from "./components/PostList";
import CommentsList from "./components/CommentsList";
import CommentDetails from "./components/CommentDetails";
import Layout from "./components/Layout";
import HomeNew from "./HomeNew";
import Login from "./components/Login";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <HomeNew /> },
      { path: "counter", element: <SampleCounter /> },
      { path: "posts", element: <PostList /> },
      { path: "login", element: <Login /> },
      {
        path: "users",
        element: <ProtectedRoute />,
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "comments",
            element: <CommentsList />,
          },
          {
            path: "comment/details/:id",
            element: <CommentDetails />,
          },
        ],
      },
    ],
  },
]);

export default routes;
