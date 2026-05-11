import { Router } from "express";
import { addcomment, deleteComment, getVideoComments, updateComment} from "../controllers/comment.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.use(verifyJWT)

router.use("/:videoId").get(getVideoComments).post(addcomment)
router.route("/c/:commentId").delete(deleteComment).patch(updateComment)

export default router