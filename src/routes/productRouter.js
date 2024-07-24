import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getByIdProduct,
  updateProduct,
} from "../controllers/product.js";

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProduct);
productRouter.get("/:id", getByIdProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.patch("/:id", updateProduct);

export default productRouter;
