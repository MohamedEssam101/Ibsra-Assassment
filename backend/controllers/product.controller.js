import {
  findProductById,
  getProductsWithPagination,
} from "../services/product.service.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllProducts = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const result = await getProductsWithPagination(page, limit);

  // Calculate pagination metadata
  const totalPages = Math.ceil(result.totalProducts / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  res.status(200).json({
    success: true,
    message: "Products retrieved successfully",
    data: {
      data: result.products,
      pagination: {
        currentPage: page,
        totalProducts: result.totalProducts,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage,
      },
    },
  });
});

export const getProductById = catchAsync(async (req, res) => {
  const product = await findProductById(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product retrieved successfully",
    data: product,
  });
});
