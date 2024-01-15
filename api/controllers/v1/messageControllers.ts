import Message from "../../models/v1/messageModel";
import Gig from "../../models/v1/gigModel";
import { Request, Response } from 'express'


export const createMessage = async (req: Request, res: Response) => {
    try {
        const { recipient, content } = req.body
        const newMessage = new Message({ sender: req.userId, recipient, content });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully', newMessage })
    } catch (error) {
        console.error('Failed to send message');
        res.status(500).json({ error: 'Failed to send message' })
    }
}