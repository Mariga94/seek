import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container">
      <NavLink to="/" className="nav-logo">
        Seek
      </NavLink>
      <nav className="nav">
        <NavLink to="/seller">Become a Seller</NavLink>
        <NavLink to="/login" className="nav-item">
          Login
        </NavLink>
        <NavLink to="/signup" className="nav-item sign-up">
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
