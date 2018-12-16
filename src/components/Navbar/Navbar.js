import React from "react";

const Navbar = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        {props.label}
      </a>
    </li>
    <a>Click an image to begin!</a>
    <a>Scores</a>
  </ul>
);

export default Navbar;
