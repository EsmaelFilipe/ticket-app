import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Create a cached connection variable in the global scope
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If a connection already exists, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If no promise is set, create a new connection promise
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable buffering, useful in production
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  // Await the promise and set the connection
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
