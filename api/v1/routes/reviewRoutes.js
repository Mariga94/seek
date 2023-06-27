import {
  createReview,
  getReviews,
  deleteReview,
} from "../../controllers/reviewControllers.js";
import verifyToken from "../../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReview);

export default router;
