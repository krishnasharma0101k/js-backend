import { Router } from "express";
import { getSubscribedChannels, getUserChannelSubscribers, toggleSubscription } from "../controllers/subscription.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import router from "./dashboard.routes";

const route = Router()

router.use(verifyJWT)

router.route("/c/:channelId")
.get(getSubscribedChannels)
.post(toggleSubscription)

router.route("/u/:subscriberId").get(getUserChannelSubscribers)

export default router