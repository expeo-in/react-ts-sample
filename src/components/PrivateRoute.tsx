import { useContext } from "react";
import AuthContext from "../authContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props: any) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  //return <Outlet></Outlet>;
  return <div>{props.children}</div>;
};

export default PrivateRoute;

const AdminRoute = (props: any) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  if (user.role !== "Admin") return <Navigate to="/accessdenied" />;

  //return <Outlet></Outlet>;
  return <div>{props.children}</div>;
};
