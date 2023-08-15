import { createProject, getProject, getProjects } from "../../controllers/v1/projectControllers";
import express from 'express';
// import { jwtMiddleware } from '../../middlewares/middlewares'
const router = express.Router()

router.post('/create-project', createProject);
router.get('/:id', getProject);
router.get('/', getProjects)


export default router