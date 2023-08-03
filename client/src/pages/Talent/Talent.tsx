import "./Talent.css";
import profile from "../../assets/icons/profile.png";
import { ImageSlider } from "../../components";
import { Link } from "react-router-dom";
// import {useParams} from 'react-router-dom';
const Talent = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2021/09/28/11/48/squirrel-6664212_1280.png",
    "https://cdn.pixabay.com/photo/2021/09/28/11/48/squirrel-6664212_1280.png",
    "https://cdn.pixabay.com/photo/2021/09/28/11/48/squirrel-6664212_1280.png",
  ];
  return (
    <div className="container talent flex-col">
      <div className="bread-crumbs flex-row">
        Home / Services / I will design website UI UX in adobe xd or figma
      </div>

      <div className="talent-header flex-col">
        <h2>I will design website UI UX in adobe xd or figma</h2>
        <div className="flex-row">
          <img src={profile} alt="" className="profile-image" />
          <h3>John Doe</h3>
          <h3>4.7 (0 Reviews)</h3>
        </div>
      </div>
      <div className="talent-main flex-row">
        <div className="talent-main_left flex-col">
          <div className="flex-row talent-main_left-capsule">
            <div>
              <h4>Delivery Time</h4>
              <p>4 Days</p>
            </div>
            <div>
              <h4>English Level</h4>
              <p>Conversational</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>Nairobi</p>
            </div>
          </div>
          <ImageSlider images={images} />
          <div>
            <h3>Service Description</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              dolorem nulla officia aut ex quas delectus enim veritatis autem
              beatae dicta perferendis neque soluta magnam, porro voluptatibus
              nobis, facilis eum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vitae necessitatibus earum magnam nisi doloribus
              nulla exercitationem amet hic eius asperiores deserunt ut
              repellendus accusamus officiis repudiandae facilis, fugit velit
              reiciendis!
            </p>
          </div>
        </div>
        <div className="talent-main_right flex-col">
          <div className="talent-main_price-info">
            <h3>$29</h3>
            <h4>1000 words</h4>
            <p>I will professionally translatte english to german</p>
            <p>$85</p>
            <button>Buy Now $29</button>
          </div>
          <div className="talent-main-about flex-col">
            <h4>About The Seller</h4>
            <div className="flex-row">
              <img src={profile} alt="" className="profile-img-2" />
              <div className="flex-col">
                <h4>John Doe</h4>
                <p>Marketing Manager</p>
                <p>5.0 (0 Reviews)</p>
              </div>
            </div>
            <div className="flex-row">
              <div>
                <h4>Location:</h4>
                <p>Los Angeles</p>
              </div>
              <div>
                <h4>Rate:</h4>
                <p>$25 - $30 / hr</p>
              </div>
            </div>
            <div className="flex-col">
              <Link to="/">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
