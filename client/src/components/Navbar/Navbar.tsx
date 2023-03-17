import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="container nav">
        <span className="logo">
          <Link to="/">
            <span>Seek</span>
          </Link>
        </span>
        <nav className="navbar-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/find-talent" className="nav-link">
                Find Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/find-work" className="nav-link">
                Find Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">
                Get Started
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
