import "./Orders.css";
import React from "react";
import newRequest from "../../utils/newRequest";
const Orders = (): JSX.Element => {
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const fetchOrders = async () => {
    try {
      const res = await newRequest.get(`/orders`);
      setOrders(res.data);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchOrders();
  }, []);

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
  }

  console.log(orders);
  return (
    <div>
      <div className="container inner">
        {loading ? (
          "Loading"
        ) : error ? (
          "error"
        ) : (
          <>
            <div>
              <h1>Orders</h1>
              <table>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Contact</th>
                </tr>
                {/* {(orders.length > 1) && orders.map((order) => {
                    <tr key={order._id}>
                        <td>
                            <img className="image" src={order.img} alt="" />
                        </td>
                        <td>{order.title}</td>
                        <td>{order.price}</td>
                        <td>
                            <img className="message" src="./images/message" alt="" onClick={()=> handleContact(order)}/>
                    </tr>
                })} */}
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
