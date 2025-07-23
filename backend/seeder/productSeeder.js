import Product from "../models/product-model.js";

// Mock data arrays
const categories = [
  "T-Shirts",
  "Jeans",
  "Dresses",
  "Sneakers",
  "Jackets",
  "Hoodies",
  "Shorts",
  "Skirts",
];

const colors = [
  "Black",
  "White",
  "Blue",
  "Red",
  "Green",
  "Gray",
  "Navy",
  "Beige",
  "Pink",
  "Yellow",
];

const sizes = {
  "T-Shirts": ["XS", "S", "M", "L", "XL", "XXL"],
  Hoodies: ["S", "M", "L", "XL", "XXL"],
  Jeans: ["28", "30", "32", "34", "36", "38"],
  Dresses: ["XS", "S", "M", "L", "XL"],
  Sneakers: ["7", "8", "9", "10", "11", "12"],
  Jackets: ["S", "M", "L", "XL", "XXL"],
  Shorts: ["XS", "S", "M", "L", "XL"],
  Skirts: ["XS", "S", "M", "L", "XL"],
};

const descriptions = {
  "T-Shirts":
    "Comfortable cotton t-shirt perfect for everyday wear. Soft fabric with excellent breathability.",
  Jeans:
    "Classic denim jeans with a modern fit. Durable and stylish for any occasion.",
  Dresses:
    "Elegant dress perfect for both casual and formal occasions. Flattering cut and premium fabric.",
  Sneakers:
    "Comfortable athletic shoes with excellent support. Perfect for sports and casual wear.",
  Jackets:
    "Stylish jacket that combines fashion and functionality. Perfect for cooler weather.",
  Hoodies:
    "Cozy hoodie with soft interior lining. Perfect for casual wear and staying warm.",
  Shorts:
    "Comfortable shorts perfect for summer activities. Lightweight and breathable fabric.",
  Skirts:
    "Fashionable skirt with a flattering fit. Versatile piece for your wardrobe.",
};

// Real clothing images by category
const categoryImages = {
  "T-Shirts": {
    imageCover:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f82e7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    ],
  },
  Jeans: {
    imageCover:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    ],
  },
  Dresses: {
    imageCover:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-c94a4a9e4b17?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&h=400&fit=crop",
    ],
  },
  Sneakers: {
    imageCover:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    ],
  },
  Jackets: {
    imageCover:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=400&fit=crop",
    ],
  },
  Hoodies: {
    imageCover:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    ],
  },
  Shorts: {
    imageCover:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555003152-7cf4ac5335e6?w=400&h=400&fit=crop",
    ],
  },
  Skirts: {
    imageCover:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d53?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
    ],
  },
};

// Generate random mock products
const generateMockProducts = (count = 50) => {
  const products = [];

  for (let i = 1; i <= count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const productColors = colors.slice(0, Math.floor(Math.random() * 3) + 1); // 1-3 colors
    const productSizes = sizes[category] || ["S", "M", "L"];
    const categoryImage = categoryImages[category];

    const product = {
      name: `${category.slice(0, -1)} ${i}`, // Remove 's' from category for name
      description: descriptions[category],
      price: Math.floor(Math.random() * 200) + 20, // Price between $20-$220
      imageCover: categoryImage.imageCover,
      images: categoryImage.images,
      category: category,
      sizes: productSizes,
      color: productColors,
      inStock: Math.random() > 0.1, // 90% chance to be in stock
    };

    products.push(product);
  }

  return products;
};

// Seeder function
export const seedProducts = async () => {
  try {
    console.log("🌱 Starting product seeding...");

    // Check if products already exist
    const existingProducts = await Product.countDocuments();

    if (existingProducts > 0) {
      console.log(
        `📦 Found ${existingProducts} existing products. Skipping seeding.`
      );
      return;
    }

    // Generate and insert mock products
    const mockProducts = generateMockProducts(30); // Generate 30 products
    await Product.insertMany(mockProducts);

    console.log(`✅ Successfully seeded ${mockProducts.length} products!`);
  } catch (error) {
    console.error("❌ Error seeding products:", error.message);
  }
};

// Optional: Function to clear and reseed (for development)
export const reseedProducts = async () => {
  try {
    console.log("🗑️  Clearing existing products...");
    await Product.deleteMany({});

    console.log("🌱 Reseeding products...");
    const mockProducts = generateMockProducts(30);
    await Product.insertMany(mockProducts);

    console.log(`✅ Successfully reseeded ${mockProducts.length} products!`);
  } catch (error) {
    console.error("❌ Error reseeding products:", error.message);
  }
};
