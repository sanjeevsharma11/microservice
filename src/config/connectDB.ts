import mongoose from "mongoose";
import config from "config";

const connectDB = async () => {
  const MONGO_URI = config.get<string>("MONGO_URI");

  try {
    const connection = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
