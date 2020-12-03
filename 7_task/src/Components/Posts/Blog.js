import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./Posts.css";

const Blog = () => {
  const [title, setTitle] = useState("Hello,Dear");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/posts").then((response) =>
      setPosts(response.data)
    );
  }, []);
  return (
    <div>
      <h1
        onClick={() => {
          let newTitle = prompt("What should be the next title?");
          setTitle(newTitle);
        }}
      >
        {title}
      </h1>

      <div className="posts">
        {posts.map((p) => (
          <div className="post" key={p.id}>
            <img src={p.img} alt="{p.id}" />
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <p>{p.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
