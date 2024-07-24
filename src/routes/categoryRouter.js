import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getByIdCategory,
  updateCategory,
} from "../controllers/category.js";

const categoryRouter = Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:id", getByIdCategory);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.patch("/:id", updateCategory);

export default categoryRouter;
