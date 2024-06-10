import { Link, Navigate, Outlet } from "react-router-dom";
import useAuth from "./auth";

const ProtectedRoute = (props: any) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  //return <div>{props.children}</div>;
  return (
    <>
      <div>
        <h2>Side bar</h2>
        <div>
          <Link to="/users/products">Products</Link>
        </div>
        <div>
          <Link to="/users/comments">Comments</Link>
        </div>
      </div>
      <Outlet />;
    </>
  );
};

export default ProtectedRoute;
