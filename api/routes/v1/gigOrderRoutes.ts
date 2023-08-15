import { createOrder, getOrder, getOrders, deleteOrder } from '../../controllers/v1/gigOrderControllers'
import express from 'express'
const router = express.Router()

router.post('/:id', createOrder);
router.get('/:id', getOrder);
router.get('/', getOrders);
router.delete('/:id', deleteOrder);

export default router

