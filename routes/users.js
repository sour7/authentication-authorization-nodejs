import express from "express";
import {  deleteUser,getUser ,deleteUsers  } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are seening this page because you are alredy logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })


//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyToken, getUser);

//delete ALL
router.delete("/", deleteUsers);

export default router;
