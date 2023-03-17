import "./TrusteBy.css";

const TrustedBy = (): JSX.Element => {
  return (
    <div className="section-trusted">
      <div className="container">
        <div className="section-trusted-inner">
          <ul className="nav-trusted-list">
            <li className="nav-trusted-item">
              <span>FACEBOOK</span>
            </li>
            <li className="nav-trusted-item">
              <span>AIRBNB</span>
            </li>
            <li className="nav-trusted-item">
              <span>MICROSOFT</span>
            </li>
            <li className="nav-trusted-item">
              <span>SAFARICOM</span>
            </li>
            <li className="nav-trusted-item">
              <span>TELECOM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
