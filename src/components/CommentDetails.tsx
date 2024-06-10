import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const CommentDetails = () => {
  const { id } = useParams();
  const [comment, setComment] = useState<any>({});
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/comments?sortColumn=name&sortOrder=desc");
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/" + id)
      .then((res) => setComment(res.data));
  }, []);

  return (
    <>
      <h2>Comment Details - {id}</h2>
      <p>Name: {comment.name}</p>
      <p>Body: {comment.body}</p>
      <p>Email: {comment.email}</p>
      <button onClick={handleClick}>Back to List</button>
    </>
  );
};

export default CommentDetails;
