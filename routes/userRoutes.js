import express from "express";

import {
  updatedUser,
  deleteUser,
  signin,
  signup,
  profileUpdate,
  getUsers,
  getUser,
} from "../controllers/userController.js";

import { isAuth, isAdmin } from "../utils.js";

const userRouter = express.Router();
userRouter.get("/", isAuth, isAdmin, getUsers);
userRouter.get("/:id", isAuth, isAdmin, getUser);
userRouter.put("/:id", isAuth, isAdmin, updatedUser);
userRouter.delete("/:id", isAuth, isAdmin, deleteUser);
// Auth
userRouter.post("/signin", signin);
userRouter.post("/signup", signup);
//Update Product
userRouter.put("/profile", isAuth, profileUpdate);

export default userRouter;
