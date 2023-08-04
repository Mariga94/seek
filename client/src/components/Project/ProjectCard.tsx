import "./ProjectCard.css";
import cardImage from "../../assets/cardimage.jpg";
import { useNavigate } from "react-router-dom";
const ProjectCard = () => {
  const navigate = useNavigate();
  const handleNavigate = (id: string): void => {
    navigate(`/projects/${id}`);
  };
  return (
    <div className="flex-col talent-card" onClick={() => handleNavigate("1")}>
      <img src={cardImage} alt="" className="talent-card_image" />
      <div className="flex talent-card_info">
        <span>ABC Ltd</span>
        <h4>Developer for banking Mobile App</h4>
        <span>Nairobi</span>
        <div className="flex-row talent-card_profile">
          <p>
            Price: $<span className="price">158 - 240</span> / Hour rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
