import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");

    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/clothingstore";

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    throw error;
  }
};
