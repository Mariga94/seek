import TrustedBy from "../../components/Trusted/TrustedBy";
import "./Home.css";
const Home = (): JSX.Element => {
  return (
    <>
      <div className="section-hero hero-homepage">
        <div className="container">
          <div className="section-body">
            <div className="section-inner">
              <div className="section-title">
                <h1>Find the next right talent for your project.</h1>
                <a href="#" className="button">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrustedBy />
    </>
  );
};

export default Home;
