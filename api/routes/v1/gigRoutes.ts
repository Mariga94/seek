import { createGig, getGig, getGigs, deleteGig, updateGig } from '../../controllers/v1/gigControllers'
import express from 'express';
import { jwtMiddleware } from '../../middlewares/middlewares';
const router = express.Router()

router.post('/creategig', jwtMiddleware,createGig);
router.get('/:id', getGig);
router.get('/', getGigs);
router.delete('/:id', deleteGig);
router.put('/:id', updateGig)


export default router
