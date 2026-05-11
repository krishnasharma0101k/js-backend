import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    },
    likeby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, {timestamps: true}) 

likeSchema.index({ video: 1, likedby: 1 }, { unique: true, sparse: true });
likeSchema.index({ comment: 1, likedby: 1 }, { unique: true, sparse: true });
likeSchema.index({ tweet: 1, likedby: 1 }, { unique: true, sparse: true });


export const Like = mongoose.model("Like", likeSchema)