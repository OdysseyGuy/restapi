import { MongoClient } from "mongodb";

const DATABASE_URI: string =
  process.env.DATABASE_URI || "mongodb://0.0.0.0:27017/";
const client: MongoClient = new MongoClient(DATABASE_URI, {});

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.info("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default { connectToDatabase };
