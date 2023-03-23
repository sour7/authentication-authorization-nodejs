import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";

const app= express()
dotenv.config()

const connect=async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to Database")
} catch (error) {
    throw error
}}

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongo DB disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("Mongo DB connected")
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);





// app.get("/", (req, res)=>{
//     res.send("Hello from backend")
// })


// app.use((err, req, res, next) => {
//     const errorStatus = err.status || 500;
//     const errorMessage = err.message || "Something went wrong!";
//     return res.status(errorStatus).json({
//       success: false,
//       status: errorStatus,
//       message: errorMessage,
//       stack: err.stack,
//     });
//   });

app.listen(8000, ()=>{
    connect()
    console.log("server is up and running on port: 8000 ")
})
