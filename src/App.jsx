import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Footer from "./Footer";
import useFetch from "./useFetch";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";

function App() {
  let myName1 = "shaown";
  const [myName, setMyName] = useState("Shaown1");
  const [blogArray, setBlogArray] = useState([]);
  const { loading, data, errorMessage } = useFetch(
    "http://localhost:3000/blogs"
  );
  const navigate = useNavigate();

  function deleteMe(ID) {
    setBlogArray(blogArray.filter(({ id }) => id != ID));
  }

  useEffect(() => {
    setBlogArray(data);
  }, [data]);

  return (
    <div>
      <div>
        <NavLinks />

        <p>{myName}</p>
        <button
          onClick={() => {
            setMyName("afsin");
            setTimeout(() => {
              navigate("/add-blog");
            }, 1000);
          }}
        >
          Change Name
        </button>
      </div>
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        {loading && <p>loading..</p>}

        {!errorMessage && blogArray && (
          <BlogList blogArray={blogArray} blogTitle="All Blogs" />
        )}
      </div>
      <div>
        {!errorMessage && blogArray && (
          <BlogList
            blogArray={blogArray.filter(({ author }) => author == "Shaown")}
            blogTitle="Shaown Blogs"
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
