import { login, logout, register } from "../../controllers/v1/authControllers";
import { Router } from "express";

const router = Router()

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout)
export default router