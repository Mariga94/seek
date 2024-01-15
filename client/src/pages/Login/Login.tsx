import { Link } from "react-router-dom";
import "./Login.css";
import { useReducer, useState } from "react";
import fetchApi from "../../api/api";
import { FormState, FormAction } from "../../types/index";
import { useNavigate } from "react-router-dom";
const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
const Login = () => {
  const initialState: FormState = {
    userType: "freelancer",
    email: "",
    password: "",
  };
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FIELD", field: name as keyof FormState, value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setisLoading(true);
      const data = await fetchApi("/auth/login", "POST", formData);
      localStorage.setItem("user", JSON.stringify(data));
      navigate('/')
      setisLoading(false);
      console.log("Login successful:");
    } catch (error) {
      setisLoading(false);
      console.error("Login failed", error);
    }
  };

  return (
    <div className="container flex-col login-page">
      <h1>Log In</h1>
      <p>Welcome back</p>
      <form onSubmit={handleSubmit} className="flex-col form-login">
        <p>
          Don't have an account?
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </p>
        <div className="flex-col register-container">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex-col register-container">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="btn-primary">
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
