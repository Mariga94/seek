import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
const Navbar = (): JSX.Element => {
  const [currentUser, setCurrentUser] = React.useState<null | string>(null);
  useEffect(() => {
    const currentUser: string = JSON.parse(
      localStorage.getItem("currentUser")!
    );
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);
  const navigate = useNavigate();
  const handleLogout = async (): Promise<void> => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null!);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

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
              <Link to="/gigs" className="nav-link">
                Find Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/find-work" className="nav-link">
                Find Work
              </Link>
            </li>
            {!currentUser ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout} to={""}>
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={"/add-gig"}>
                    Add Project
                  </Link>
                </li>
                <li className="nav-item profile">
                  <Link to="/profile" className="nav-link">
                    <span className="profile">
                      <img src="" />
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
