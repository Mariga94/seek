import { createGig, getGig, getGigs, deleteGig, updateGig } from '../../controllers/v1/gigControllers'
import express from 'express';
const router = express.Router()

router.post('/creategig', createGig);
router.get('/:id', getGig);
router.get('/', getGigs);
router.delete('/:id', deleteGig);
router.put('/:id', updateGig)


export default router
