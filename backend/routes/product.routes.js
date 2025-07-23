import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

// GET /api/products - Get all products with pagination
router.get("/", getAllProducts);

// GET /api/products/:id - Get product by ID
router.get("/:id", getProductById);

export default router;
