import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Holiday Photos</span>
        <div className="d-flex">
          <span className="navbar-brand">Vardas</span>

          <Link className="navbar-brand" to="/login">
            Atsijungti
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
