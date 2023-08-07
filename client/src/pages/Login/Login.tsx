import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="container flex-col login-page">
      <h1>Log In</h1>
      <p>Welcome back</p>
      <form action="" className="flex-col form-login">
        <p>Don't have an account? <Link to='/signup' className="link">Sign Up</Link></p>
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

        <button className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
