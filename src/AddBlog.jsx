import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  function handleSubmit() {
    if (title != "" && author != "" && description != "") {
      let obj = { title, author, description };

      (async () => {
        let res = await fetch("http://localhost:3000/blogs", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(obj),
        });

        if (res.statusText == "Created") {
          setMessage(true);
          setTitle("");
          setAuthor("");
          setDescription("");

          setTimeout(() => {
            setMessage(false);

            setTimeout(() => {
              navigate("/");
            }, 1000);
          }, 2000);
        }
      })();
    }
  }

  return (
    <div>
      <NavLinks />
      <h2>AddBlog</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label htmlFor="user-title">Title</label>
          <input
            type="text"
            id="user-title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="user-author">Author</label>
          <input
            type="text"
            id="user-author"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="user-description">description</label>
          <textarea
            id="user-description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
      {message && <p>blog added!</p>}
    </div>
  );
}

export default AddBlog;
