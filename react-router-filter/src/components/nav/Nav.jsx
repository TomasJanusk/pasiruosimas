import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-lg-5">
        <a className="navbar-brand" href="#!">
          Demo projektas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Pradinis
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                Apie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
