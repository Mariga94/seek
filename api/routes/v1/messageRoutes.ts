import express from 'express'
import { createMessage } from '../../controllers/v1/messageControllers'
const router = express.Router()

router.post('/sendMessage', createMessage)
export default router;