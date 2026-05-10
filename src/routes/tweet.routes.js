import { Router } from "express";
import {
    createTweet,
    deleteTweet,
    getUserTweets,
    updateTweet,
} from "../controllers/tweet.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Protected routes
router.use(verifyJWT);

// Create tweet
router.route("/").post(createTweet);

// Get all tweets of a specific user
router.route("/user/:userId").get(getUserTweets);

// Update and delete tweet
router
    .route("/:tweetId")
    .patch(updateTweet)
    .delete(deleteTweet);

export default router;