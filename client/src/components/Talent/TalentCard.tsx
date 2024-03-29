import "./TalentCard.css";
import cardImage from "../../assets/cardimage.jpg";
import profileImage from "../../assets/icons/profile.png";
import { useNavigate } from "react-router-dom";
const TalentCard = () => {
  const navigate = useNavigate();
  const handleNavigate = (id: string):void => {
    navigate(`/services/${id}`)
  }
  return (
    <div className="flex-col talent-card" onClick={() => handleNavigate('1')}>
      <img src={cardImage} alt="" className="talent-card_image" />
      <div className="flex talent-card_info">
        <span>Programming & Tech</span>
        <h4>Web development, with HTML, CSS, Javascript and PHP</h4>
        <span>4.0</span>
        <div className="flex-row talent-card_profile">
          <div className="flex-row ">
            <img src={profileImage} alt="" className="profile-img" />
            <p>Ali Tufan</p>
          </div>
          <p>
            Starting at: $<span className="price">158</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
