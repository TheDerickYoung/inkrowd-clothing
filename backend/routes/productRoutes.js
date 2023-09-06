import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  getProductBySex,
} from "../controllers/productController.js";

/// "api/products"
router.route("/").get(getProducts);

// "/api/products/:id"
router.route("/:id").get(getProductById);

// "/api/products/category/:sex"
router.route("/category/:sex").get(getProductBySex);

export default router;
