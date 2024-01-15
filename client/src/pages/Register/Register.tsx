import "./Register.css";
import { useReducer, useState } from "react";
import fetchApi from "../../api/api";
import { useNavigate } from "react-router-dom";

interface FormState {
  userType: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UpdateFieldAction {
  type: "UPDATE_FIELD";
  field: keyof FormState;
  value: string;
}

type FormAction = UpdateFieldAction;

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const Register = () => {
  const initialState: FormState = {
    userType: "freelancer",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, dispatch] = useReducer(formReducer, initialState);
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState<boolean>(false);
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FIELD", field: name as keyof FormState, value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setisLoading(true);
      await fetchApi("/auth/register", "POST", formData);
      setisLoading(false);
      navigate('/login')
      console.log("Registration successful:");
    } catch (error) {
      setisLoading(false)
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="container flex-col register-page">
      <h1>Sign Up</h1>
      <p>Create an account</p>
      <form onSubmit={handleSubmit} className="flex-col form-register">
        <div className="flex-row">
          <label>
            <input
              type="radio"
              value="freelancer"
              checked={formData.userType === "freelancer"}
              name="userType"
              onChange={handleInputChange}
            />
            Freelancer
          </label>
          <label>
            <input
              type="radio"
              value="employer"
              checked={formData.userType === "employer"}
              name="userType"
              onChange={handleInputChange}
            />
            Employer
          </label>
        </div>
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
        <div className="flex-col">
          <label htmlFor="confirm-password">Confirm Password *</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <button className="btn-primary">
          {isLoading ? "Loading..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Register;
