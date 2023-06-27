import React, { useEffect, useState } from "react";
import "./GigPage.css";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";

interface gig {
  title: string;
  cover: string;
  description: string;
  deliveryTime: number;
  category: string;
  price: number;
  userId: string;
  _id: string;
}

export const GigPage = (): JSX.Element => {
  const [gig, setGig] = useState<object>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams();
  const [user, setUser] = useState<object>({});

  const fetchGig = async (gigId: string | undefined) => {
    try {
      const res = await newRequest(`/projects/single/${gigId}`);
      setGig(res.data);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(true);
      }
    }
  };

  const fetchUser = async (userId: string) => {
    try {
      const res = await newRequest(`/users/${userId}`);
      setUser(res.data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    fetchGig(id);
  }, []);

  useEffect(() => {
    Object.keys(gig).length > 0 && fetchUser(gig.userId);
  },[]);
  console.log(gig);
  return (
    <div className="info-page">
      <div className="container flex-row">
        {loading == true ? (
          "loading"
        ) : (
          <>
            <div className="left col-1-2">
              <Link to="/gigs">Home</Link>
              <span> &#62; </span>
              <Link to="/categories">{gig.category}</Link>
              <div></div>
              <h1>{gig.title}</h1>
              <div className="seller-details">
                <img src="" alt="" className="profile-image" />
                <h4>{user.username}</h4>
                <h4>
                  Ratings<span></span>
                </h4>
              </div>
              <div className="cover-image">
                <img src={gig.cover} className="proj-image" />
              </div>
              <div className="project-details">
                <h2>Project details</h2>
                <p>{gig.description}</p>
              </div>
            </div>
            <div className="right col-1-2">
              <div className="right-inner">
                <h4>
                  Price $<span>{gig.price}</span>
                </h4>
                <h4>
                  Delivery Time <span>{gig.deliveryTime} days</span>
                </h4>
                <Link to={`/orders/${id}`}>
                  <button className="btn-primary button">Continue</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
