import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import AuthContext from "../authContext";

const Layout = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogin = () => {
    if (!user) setUser({ id: 1, name: "siva", roles: [] });
    else setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user }}>
        <header>
          <h1>React Sample</h1>
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="list-group-item">
                <NavLink to="/basics" className="nav-link">
                  Basics
                </NavLink>
              </li>
              <li className="list-group-item">
                <NavLink to="/todos" className="nav-link">
                  ToDos
                </NavLink>
              </li>
              <li className="list-group-item">
                <NavLink to="/posts" className="nav-link">
                  Posts
                </NavLink>
              </li>
            </ul>

            <button
              className="btn btn-secondary"
              type="submit"
              onClick={handleLogin}
            >
              {user ? "Logout" : "Login"}
            </button>

            {user?.name}
          </nav>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>react sample.com</footer>
      </AuthContext.Provider>
    </>
  );
};

export default Layout;
