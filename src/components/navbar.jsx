import React, { Component } from "react";

//statelesss functional component
const NavBar = (props) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Total{" "}
          <span className="badge rounded-pill bg-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
