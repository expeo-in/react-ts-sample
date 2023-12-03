import axios from "axios";
import { useEffect, useRef, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);

  const addPost = () => {
    let post = {
      userId: 1,
      id: 0,
      title: "",
      body: "details",
    };

    if (titleRef.current) post.title = titleRef.current.value;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((res) => {
        setPosts([res.data, ...posts]);
      });
  };

  const updatePost = (post: any) => {
    post.title += " changed";
    axios
      .put("https://jsonplaceholder.typicode.com/posts/" + post.id, post)
      .then((res) => {
        setPosts(posts.map((p) => (p.id == post.id ? res.data : p)));
      });
  };

  const deletePost = (id: any) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        setPosts(posts.filter((p) => p.id !== id));
      });
  };

  const loadPosts = () => {
    axios
      .get("https://xjsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => setError(error.message));
  };

  //   useEffect(() => {

  //   }, []);

  return (
    <>
      <h1>Post Lists</h1>
      <button onClick={loadPosts}>Load Data</button>
      {error && <p className="alert alert-danger">{error}</p>}
      <div>
        <input type="text" ref={titleRef}></input>
        <button className="btn btn-primary" onClick={addPost}>
          {" "}
          Add
        </button>
      </div>

      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="d-flex d-flex-row justify-content-between p-3"
          >
            {post.title}
            <div>
              <button
                className="btn btn-primary me-3"
                onClick={() => updatePost(post)}
              >
                Update
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
