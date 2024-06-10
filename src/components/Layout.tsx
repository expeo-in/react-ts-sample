import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>React Website</h1>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          {/* <div>
            <Link to="/users/products">Products</Link>
          </div> */}
          <div>
            <Link to="/counter">Counter</Link>
          </div>
          <div>
            <Link to="/posts">Posts</Link>
          </div>
          {/* <div>
            <Link to="/users/comments">Comments</Link>
          </div> */}
          <div>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </header>
      <hr />
      <main className="">
        <Outlet />
      </main>
      <hr />
      <footer>All rights reserved</footer>
    </>
  );
};

export default Layout;
