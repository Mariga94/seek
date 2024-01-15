import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../api/api";
import { useState } from "react";
import userprofile from "../../assets/icons/profile.png";

interface userData {
  _id: string;
  email: string;
  fullName?: string;
  userType: string;
  isLoggedIn: boolean;
  redirectUrl: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userDataString: string | null = localStorage.getItem("user");
  const userData: userData | null = userDataString
    ? JSON.parse(userDataString)
    : null;
  const navigate = useNavigate();
  const handleLogout = async () => {
    await fetchApi("/auth/logout", "POST", "");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar container">
      <NavLink to="/" className="nav-logo">
        Seek
      </NavLink>
      <nav className="nav">
        {userData?.isLoggedIn ? (
          <div className="nav-dropdown user" onClick={() => setOpen(!open)}>
            <img src={userprofile} alt="" />
            <span>{userData.email}</span>
            {open && (
              <div className="options">
                {userData.userType === "freelancer" && (
                  <>
                    <NavLink className="" to="/mytalents">
                      Services
                    </NavLink>
                    <NavLink className="" to="/add-service">
                      Add New Service
                    </NavLink>
                  </>
                )}
                <NavLink className="" to="/orders">
                  Orders
                </NavLink>
                <NavLink className="" to="">
                  Messages
                </NavLink>
                <NavLink className="" to="" onClick={handleLogout}>
                  Logout
                </NavLink>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/seller">Become a Seller</NavLink>
            <NavLink to="/login" className="nav-item">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-item sign-up">
              Sign Up
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
