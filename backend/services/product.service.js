import Product from "../models/product-model.js";
import { AppError } from "../utils/AppError.js";

export const getProductsWithPagination = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const totalProducts = await Product.countDocuments();
  const products = await Product.find({})
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  return { products, totalProducts };
};

export const findProductById = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return product;
};
