import Order from "../../models/v1/gigOrderModel";
import Gig from "../../models/v1/gigModel";
import { Request, Response } from 'express'

export const createOrder = async (req: Request, res: Response) => {
    try {
        const gig = await Gig.findById(req.params.id);
        const newOrder = new Order({
            gigId: gig?._id,
            orderTitle: gig?.gigTitle,
            price: gig?.cost,
            employerId: req.userId,
            freelancerId: gig?.userId
        })
        await newOrder.save();
        res.status(200).json({ message: 'order successfully made.', newOrder })
    } catch (error) {
        console.error('Error processing order:', error)
        res.status(500).json({ error: 'FAiled to process order' })
    }
}

export const getOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.status(200).json({ success: 'true', order })
        } else {
            res.status(404).json({ success: false, message: "Order not found" })
        }
    } catch (error) {
        console.error('Error getting order:', error);
        res.status(500).json({ success: false, message: 'An internal server error occurred' });
    }
}

export const getOrders = async (req: Request, res: Response) => {
    try {
        const query = {
            isCompleted: true,
            ...(req.userType === 'employer' ? { employerId: req.userId } : { freelancerId: req.userId })
        }
        const orders = await Order.find(query)
        console.log(orders)
        res.status(200).json(orders)
    } catch (error) {
        console.error('Error getting orders:', error);
        res.status(500).json({ success: false, message: 'An internal server error occurred' });
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}