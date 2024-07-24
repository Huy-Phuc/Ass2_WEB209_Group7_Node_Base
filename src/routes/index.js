import { Router } from "express";
import productRouter from "./productRouter.js";
import categoryRouter from "./categoryRouter.js";

const router = Router();

router.use("/products", productRouter);
router.use("/category", categoryRouter);

export default router;
