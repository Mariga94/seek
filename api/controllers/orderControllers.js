
import Order from "../models/orderModel.js";
import Project from "../models/projectModel.js";

export const createOrder = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).send("gig not available");
    } else {
      const newOrder = new Order({
        projectId: project._id,
        img: project.cover,
        title: project.title,
        price: project.price,
        sellerId: project.userId,
        buyerId: req.userId,
      });
      await newOrder.save();
      res.status(200).send("Order Added to cart");
    }
  } catch (err) {
    if (err instanceof Error) {
      res.send(err.message)
    }
    res.status(500).send("Something is wrong!");
  }
};

// export const deleteOrder = async () => {};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    res.send(orders).status(200);
  } catch (err) {
    if (err instanceof Error) {
      res.send(err.message);
    }
    res.send("Something is wrong").status(500);
  }
};
