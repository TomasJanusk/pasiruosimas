import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-body-tertiary">
      <div className="container-fluid ">
        <h1>Training</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Pradinis
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/contacts"
            >
              Kontaktai
            </Link>
            <Link className="nav-link active" aria-current="page" to="/about">
              Apie
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
