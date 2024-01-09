import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ToDoList from "./components/ToDoList";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PostList from "./components/PostList";
import Basics from "./components/Basics";
import PostDetail from "./components/PostDetail";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "", element: <Home /> },
      { path: "basics", element: <Basics /> },
      {
        path: "todos",
        element: (
          <PrivateRoute>
            <ToDoList />
          </PrivateRoute>
        ),
      },
      {
        path: "posts",
        element: (
          <PrivateRoute>
            <PostList />
          </PrivateRoute>
        ),
        children: [
          {
            path: ":id",
            element: (
              <PrivateRoute>
                <PostDetail />
              </PrivateRoute>
            ),
          },
        ],
      },

      // {
      //   element: <PrivateRoute />,
      //   children: [
      //     { path: "todos", element: <ToDoList /> },
      //     { path: "posts", element: <PostList /> },
      //     { path: "posts/:id", element: <PostDetail /> },
      //   ],
      // },
    ],
  },
]);

export default router;
