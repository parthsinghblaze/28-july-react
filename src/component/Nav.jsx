import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="bg-dark">
      <div className="container text-white d-flex justify-content-between py-5 align-items-center">
        <h3>Logo</h3>
        <ul className="d-flex list-unstyled gap-4 m-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/courses"> Courses </Link>
          </li>
          <li>
            <Link to="/cocktail">Cocktail</Link>
          </li>
          <li>
            <Link to="/privatePage"> Private Page </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
