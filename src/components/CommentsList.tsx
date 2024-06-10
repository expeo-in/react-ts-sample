import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import useAuth from "../auth";

const CommentsList = () => {
  //const isAuthenticated = useAuth();
  //https://jsonplaceholder.typicode.com/comments

  const [comments, setComments] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useSearchParams(); //querystring
  console.log(searchParams.get("sortOrder"));
  console.log(searchParams.get("sortColumn"));

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data));
  }, []);

  //if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <>
      <h1>Comments List</h1>
      <table className="table table-bordered">
        {comments.map((item: any) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <Link to={"/comment/details/" + item.id}>Details</Link>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default CommentsList;
