import React from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";
import upload from "../../utils/uploadFile";
import newRequest from "../../utils/newRequest";
const Register = (): JSX.Element => {
  const [file, setFile] = React.useState(null);
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    description: "",
  });
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const handleChange = (e: { target: { name: string; value: any } }) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSeller = (e: { target: { checked: any } }) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        // img: url,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <h2>Seek</h2>
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create a new account</h1>
            <label htmlFor="">Username</label>
            <input
              name="username"
              type="text"
              placeholder="johndoe"
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input name="password" type="password" onChange={handleChange} />
            <label htmlFor="">Profile Picture</label>
            {/* <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
            <label htmlFor="">Country</label>
            <input
              name="country"
              type="text"
              placeholder="Usa"
              onChange={handleChange}
            />
            <button type="submit" className="button button-primary">
              Register
            </button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <div className="toggle">
              <label htmlFor="">Activate the seller account</label>
              <label className="switch">
                <input type="checkbox" onChange={handleSeller} />
                <span className="slider round"></span>
              </label>
            </div>
            <label htmlFor="">Phone Number</label>
            <input
              name="phone"
              type="text"
              placeholder="+1 234 567 89"
              onChange={handleChange}
            />
            <label htmlFor="">Description</label>
            <textarea
              placeholder="A short description of yourself"
              name="desc"
              id=""
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
