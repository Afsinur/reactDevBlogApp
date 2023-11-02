import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/add-blog"}>Add blog</Link>
      <Link to={"/contact-us"}>Contact us</Link>
    </div>
  );
}

export default NavLinks;
