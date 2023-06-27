import express from "express";
import { createOrder, getOrders } from "../../controllers/orderControllers.js";
import { verifyToken } from "../../middleware/jwt.js";
const router = express.Router();

router.post("/:id", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
