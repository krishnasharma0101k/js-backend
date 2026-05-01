// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})
import connectDB from "./db/index.js";




connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`sever is running at port: ${process.env.PORT}`);
  })
  // app.on("error", (error) => {
  //   console.log("err:", error);
  //   throw error
  // })
})
.catch((err) => {
  console.log("MONGO db connection faild !!", err);
})









/*
import express from "express"
const app = express()

(async () => {
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error", (error) => {
        console.log("ERR:", error);
        throw error
      })

      app.listen (process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      })

    } catch (error) {
        console.log("error: ", error);
        throw err
    }
})()
    */