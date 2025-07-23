// Product interface
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageCover: string;
  images: string[];
  category: string;
  sizes: string[];
  color: string[];
  inStock: boolean;
}

// Pagination interface
export interface Pagination {
  currentPage: number;
  totalProducts: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// API Response interfaces
export interface ProductsResponse {
  success: boolean;
  message: string;
  data: {
    data: Product[];
    pagination: Pagination;
  };
}

export interface SingleProductResponse {
  success: boolean;
  message: string;
  data: Product;
}

export interface ApiError {
  success: false;
  status: string;
  message: string;
  stack?: string;
}
