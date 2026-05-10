import { Router } from "express";
import { getAllVideos,  publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus } from "../controllers/video.controller";
    import { verifyJWT } from "../middlewares/auth.middleware";
    import { upload } from "../middlewares/multer.middleware";

    const router = Router();

router.use(verifyJWT); // ✅ Apply verifyJWT to all routes below

router
    .route("/")
    .get(getAllVideos)
    .post(
        upload.fields([
            { name: "videoFile", maxCount: 1 },
            { name: "thumbnail", maxCount: 1 }
        ]),
        publishAVideo
    );

router
    .route("/:videoId")
    .get(getVideoById)
    .patch(
        upload.single("thumbnail"),
        updateVideo
    )
    .delete(deleteVideo);

router
    .route("/toggle/publish/:videoId")
    .patch(togglePublishStatus);

export default router;