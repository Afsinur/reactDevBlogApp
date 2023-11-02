import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import NavLinks from "./NavLinks";

function BlogDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  const { loading, data, errorMessage } = useFetch(
    `http://localhost:3000/blogs/${id}`
  );

  async function handleDelete() {
    setIsDeleting(true);

    let res = await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      navigate("/");
    }
  }

  return (
    <div>
      <NavLinks />
      <h2>BlogDetails</h2>
      {loading && <p>loading</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {!errorMessage && (
        <div>
          <h2>{data.title}</h2>
          <p>-{data.author}</p>
          <p>{data.description}</p>
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            {!isDeleting && <span>Delete</span>}
            {isDeleting && <span>deleting..</span>}
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
