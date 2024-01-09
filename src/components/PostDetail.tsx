import axios from "axios";
import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>({});
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("pageno"));
  console.log("location", useLocation());

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => setPost(res.data));
  }, [id]);

  const handleBack = () => {
    navigate("/posts");
  };

  return (
    <>
      <h1>Post Detail - {id}</h1>
      <p>User Id - {post.userId}</p>
      <p>Title - {post.title}</p>
      <p>Body - {post.body}</p>

      <button onClick={handleBack}>Back</button>
    </>
  );
};

export default PostDetail;
