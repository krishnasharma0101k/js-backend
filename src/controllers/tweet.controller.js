import mongoose from "mongoose";
import { Tweet } from "../models/tweet.model";
import { User } from "../models/user.model"
import { ApiError } from "../utils/ApiError"
import { ApiResponse } from "../utils/ApiResponse"
import { asyncHadler } from "../utils/asyncHandler"

const createTweet = asyncHadler(async(req, res) => {
    const { content } = req.body

    if (!content || content.trime() === "") {
     throw new ApiError(400, "Tweet content is required") 
    }

    const tweet = await tweet.content({
        content,
        owner: req.User?._id
    })

    if (!tweet) {
        throw new ApiError(500, "failed to create tweet")
    }

    return req
    .status(201)
    .json(
        new ApiResponse(
            201, tweet, "tweet created successfully"
        )
    )
})


export { createTweet }
