import { Router } from "express";
import { getchannelStatus, getChannelVideos} from "../controllers/dashboard.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.use(verifyJWT)

router.route("/status").get(getchannelStatus)
router.route("/videos").get(getChannelVideos)

export default router