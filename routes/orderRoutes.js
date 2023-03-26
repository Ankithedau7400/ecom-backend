import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrderSummary,
  isDeliver,
  isOrder,
  isPaid,
  myOrders,
} from "../controllers/orderController.js";
import { isAuth, isAdmin } from "../utils.js";
const orderRouter = express.Router();

orderRouter.get("/", isAuth, isAdmin, getOrder);
orderRouter.post("/", isAuth, createOrder);
orderRouter.get("/summary", isAuth, isAdmin, getOrderSummary);
orderRouter.get("/mine", isAuth, myOrders);
orderRouter.get("/:id", isAuth, isOrder);
orderRouter.put("/:id/deliver", isAuth, isDeliver);
orderRouter.put("/:id/pay", isAuth, isPaid);
orderRouter.delete("/:id", isAuth, isAdmin, deleteOrder);
export default orderRouter;
