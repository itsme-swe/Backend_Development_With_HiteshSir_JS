import mongoose from "mongoose";

import { DB_NAME } from "../constrants";

const connectDB = async () => {
    try {
        
    } catch (error) {
        console.log("MongoDB connection Error ",error);
        process.exit(1);
    }
}