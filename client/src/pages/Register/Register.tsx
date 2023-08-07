import { useState } from "react";
import "./Register.css";

const Register = () => {
  // const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <div className="container flex-col register-page">
      <h1>Sign Up</h1>
      <p>Create an account</p>
      <form action="" className="flex-col form-register">
        <div className="flex-row">
          <label>
            <input type="radio" value="freelancer" name="freelancer-employer" />
            Freelancer
          </label>
          <label>
            <input type="radio" value="employer" name="freelancer-employer" />
            Employer
          </label>
        </div>
        <div className="flex-col register-container">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" value="" required />
        </div>
        <div className="flex-col register-container">
          <label htmlFor="password">Password *</label>
          <input type="password" id="password" required />
        </div>
        <div className="flex-col">
          <label htmlFor="confirm-password">Confirm Password *</label>
          <input type="password" id="confirm-password" required />
        </div>
        <div className="flex-row terms-con">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            You accept our Terms and Conditions and Privacy Policy
          </label>
        </div>
        <button className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
