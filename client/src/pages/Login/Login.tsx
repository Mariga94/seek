import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import axios from "axios";

const Login = (): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();
  const baseURL = "http://localhost:8000/api/v1";

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));

      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-section-outer">
        <h2>Seek</h2>
        <form onSubmit={handleSubmit}>
          <h3>Sign in</h3>
          <div className="form-group">
            <label htmlFor="your-title">Username</label>
            <input
              name="username"
              type="text"
              placeholder=""
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="your-password">Password</label>
            <input
              name="password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button type="submit" className="button button-primary">
            Login
          </button>
          {error && error}
        </form>
      </div>
    </div>
  );
};

export default Login;
