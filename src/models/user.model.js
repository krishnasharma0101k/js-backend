import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrpyt from "bcrypt"

const userSchrms = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true, 
        lowecase: true, 
        trime: true,
        index:true
      },
     email: {
        type: String,
        required: true,
        unique: true, 
        lowecase: true, 
        trime: true,
      },
      fullname: {
        type: String,
        required: true, 
        trime: true
      },
      avatar: {
        type: String, //cloudinary
        required: true
      },
      coverImage: {
        type: String,
      },
      watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
      ],
      password: {
        type: String,
        required: [true, 'password is required']
      },
      refreshToken: {
        type: String

        
      }
    },
    {
        timestamps: true
    }
)

userSchrms.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
    
  this.password = bcrpyt.hash(this.password, 10)
  next()
})

userSchrms.methods.isPasswordCorrect = async function(password){
  return await bcrpyt.compare(password, this.password)
}

userSchrms.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchrms.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )

}


export const User = mongoose.model("User", userSchrms)