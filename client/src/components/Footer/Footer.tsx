import "./Footer.css";
import { Link } from "react-router-dom";
import { categories } from "../../constant";
const Footer = () => {
  return (
    <div className="container footer flex-row">
      <ul className="flex-col">
        <h4>About</h4>
        <li>
          <Link to="">About Us</Link>
        </li>
        <li>
          <Link to="">Become Seller</Link>
        </li>
        <li>
          <Link to="">Terms of Service</Link>
        </li>
      </ul>
      <ul className="flex-col">
        <h4>Categories</h4>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to="">{cat.title}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <h4>Support</h4>
        <li>Help & Support</li>
        <li>Contact Us</li>
        <li>Services</li>
        <li>Terms of Service</li>
      </ul>
    </div>
  );
};

export default Footer;
