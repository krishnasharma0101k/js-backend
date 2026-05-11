import { Router } from "express";

import { healthcheck} from "../controllers/healthcheck.controller.js"
import router from "./tweet.routes";

const router = Route()

router.route("/").get(healthcheck)

export default router