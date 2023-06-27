import "./Footer.css";
const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="container footer-section">
        <div className="footer-left">
            <span className="footer-title">Seek</span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            vero error! Minus, nostrum! Aut nulla reprehenderit quis nam ad iste
            officia iure, quia corporis est, in minima corrupti, eveniet harum?
          </span>
        </div>
        <div className="footer-right">
          <div className="footer-pages">
            <ul>
              <li>
                <span>Find Services</span>
              </li>
              <li>
                <span>Find Work</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
