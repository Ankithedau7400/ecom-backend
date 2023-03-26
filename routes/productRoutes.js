import express from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import { isAuth, isAdmin } from "../utils.js";
import {
  getProducts,
  createProduct,
  updatedProduct,
  deletProduct,
  postReviews,
  adminPagination,
  search,
  categoryWise,
  getProduct,
  getProductByslug,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", isAuth, isAdmin, createProduct);
productRouter.put("/:id", isAuth, isAdmin, updatedProduct);
productRouter.delete("/:id", isAuth, isAdmin, deletProduct);
productRouter.post("/:id/reviews", isAuth, postReviews);
productRouter.get("/admin", isAuth, isAdmin, adminPagination);
productRouter.get("/search", search);
productRouter.get("/categories", categoryWise);
productRouter.get("/slug/:slug", getProductByslug);
productRouter.get("/:id", getProduct);

export default productRouter;
