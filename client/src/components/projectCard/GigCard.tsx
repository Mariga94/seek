import { Link } from "react-router-dom";
import "./GigCard.css";

type AppProps = {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  price: number;
  cover: string;
  images: [string];
  deliveryTime: number;
};

const GigCard = (props: AppProps): JSX.Element => {
  const {
    id,
    userId,
    title,
    description,
    category,
    price,
    cover,
    images,
    deliveryTime,
  } = props;
  return (
    <Link to={`/gig/${id}`} >
    <div className="gig-card" id={id}>
      <div className="image">
        <img src={cover} alt="" />
      </div>
      <div className="product">
        <h2>{title}</h2>
        <p className="desc">{description}</p>
        <h3>Price ${price}</h3>
        <h3>Delivery time {deliveryTime} days</h3>
      </div>
    </div>
    </Link>
  );
};

export default GigCard;
