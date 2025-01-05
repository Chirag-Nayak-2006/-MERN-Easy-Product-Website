import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  editProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.put("/:id", editProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/", getAllProducts);

export default productRouter;
