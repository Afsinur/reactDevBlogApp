import { Link } from "react-router-dom";

function BlogList({ blogArray, blogTitle }) {
  return (
    <div>
      <h1>{blogTitle}</h1>

      {blogArray.map(({ title, description, author, id }, i) => (
        <div className="blog-card" key={i}>
          <h2>{title}</h2>
          <p>-{author}</p>

          <Link to={`blogs/${id}`}>More</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
