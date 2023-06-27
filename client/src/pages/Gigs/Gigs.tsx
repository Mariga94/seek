import "./Gigs.css";
import newRequest from "../../utils/newRequest";
import { useEffect, useState } from "react";
import GigCard from "../../components/projectCard/GigCard";

const Gigs = (): JSX.Element => {
  const [Gigs, setGigs] = useState<
    Array<{
      _id: Key | null | undefined;
      key: string;
      value: string | number;
    }>
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getUserId = (): string | null => {
    return JSON.parse(localStorage.getItem("currentUser") as string).id;
  };

  const fetchGigs = async () => {
    try {
      const res = await newRequest("/projects");
      setGigs(res.data);
      setLoading(true);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
      console.log("Something is wrong");
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  const gigsArr = Gigs.map((gig) => {
    return (
      <GigCard
        key={gig._id}
        id={gig._id}
        userId={gig.userId}
        title={gig.title}
        description={gig.description}
        category={gig.category}
        price={gig.price}
        cover={gig.cover}
        images={gig.images}
        deliveryTime={gig.deliveryTime}
      />
    );
  });
  console.log(Gigs);
  return (
    <div className="gigs-section">
      <div className="container flex">{!loading ? "Loading" : gigsArr}</div>
    </div>
  );
};

export default Gigs;
