import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    // Connection to MongoDB
    const res = await mongoose.connect(
      "mongodb://127.0.0.1:27017/mern-auth-project2"
    );

    // Log success message if connected
    if (res) {
      console.log("Connected to MongoDB successfully");
    }
  } catch (error) {
    // Log error message if connection fails
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the application if the connection fails
  }
};

export default connectDB;
