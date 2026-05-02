import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, File, cb){
        cb(null, "./public/temp")
    },
    filename: function (req, File, cb) {
       
        cb(null,  File.originalname + '-' + uniqueSuffix)
    }
})

export const upload = multer({
     storage,
     })