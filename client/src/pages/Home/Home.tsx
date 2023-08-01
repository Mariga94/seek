import "./Home.css";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";
import procedureicon from "../../assets/icons/procedure.png";
import partnershipicon from "../../assets/icons/partnership.png";
import cashpaymenticon from "../../assets/icons/cash-payment.png";
import supporticon from "../../assets/icons/customer-support.png";
import {
  AiFillAmazonCircle,
  AiFillDropboxCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { FaMicrosoft } from "react-icons/fa";
import { categories } from "../../constant";
import { Category } from "../../components";
const Home = () => {
  return (
    <div className="container home">
      <div className="hero-section">
        <div className="left">
          <h1 className="home-title">
            Hire the best software developers for any job, online
          </h1>
          <p className="home-para">Turn your idea into a reality</p>
          <div className="home-div-container">
            <Link to="/work">Find Work</Link>
            <Link to="/talent">Find Talent</Link>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="hero" className="hero-image" />
        </div>
      </div>
      <div className="trusted-section">
        <p>Trusted by the world's best</p>
        <div className="trusted-section-logos flex-row">
          <div className="flex-col justify-content-center align-items-center">
            <AiFillAmazonCircle className="trusted-react-icon" />
            <p>Amazon</p>
          </div>
          <div className="flex-col justify-content-center align-items-center">
            <FaMicrosoft className="trusted-react-icon" />
            <p>Microsoft</p>
          </div>
          <div className="flex-col justify-content-center align-items-center">
            <AiFillDropboxCircle className="trusted-react-icon" />
            <p>Dropbox</p>
          </div>
          <div className="flex-col justify-content-center align-items-center">
            <AiFillFacebook className="trusted-react-icon" />
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div className="process-section flex-col">
        <h2>Need something done ?</h2>
        <p>The process is simple as</p>
        <div className="flex-row">
          <div>
            <img src={procedureicon} alt="flat Icons" className="flat-icon" />
            <h4>Post a job</h4>
            <p>
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div>
            <img
              src={partnershipicon}
              alt="Partner icons created by Flat Icons - Flaticon"
              className="flat-icon"
            />
            <h4>Choose freelancers</h4>
            <p>Access a wide array of vetted talents</p>
          </div>
          <div>
            <img
              src={cashpaymenticon}
              alt="Partner icons created by Flat Icons - Flaticon"
              className="flat-icon"
            />
            <h4>Pay safely</h4>
            <p>Using stripe payment system we ensure secure payment channel</p>
          </div>
          <div>
            <img
              src={supporticon}
              alt="Partner icons created by Flat Icons - Flaticon"
              className="flat-icon"
            />
            <h4>We're here to help</h4>
            <p>After services even when the project is completed.</p>
          </div>
        </div>
      </div>
      <div className="home-category-section flex-col">
        <h2>Browse talent by category</h2>
        <p>Get inspiration from 100+ skills</p>
        <div className="categories-grid">
          {categories.map((category) => {
            return <Category key={category.id} id={category.id} title={category.title} icon={category.icon}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
