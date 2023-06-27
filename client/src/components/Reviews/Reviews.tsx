import React from "react";
import "./Review.css";
import newRequest from "../../utils/newRequest";

const Reviews = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [reviews, setReviews] = React.useState({});
  const fetchReviews = async (id) => {
    try {
      const reviewData = newRequest.get(`/reviews/${id}`);
      setReviews(reviewData.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
      console.log("something is wrong with reviews");
    }
  };
  React.useEffect(() => {
    fetchReviews(props.gigId);
  }, []);

  return (
    <div className="review-section">
      <div className="container">
        <div className="review-outer">
          <h2>Reviews</h2>
          {loading
            ? "Loading"
            : error
            ? "Something went wrong!"
            : reviews.map((review) => (
                <Review key={review._id} review={review} />
              ))}
        </div>
      </div>
    </div>
  );
};
