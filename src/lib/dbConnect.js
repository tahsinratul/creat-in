import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

if (!uri) throw new Error("NEXT_PUBLIC_MONGODB_URI is missing");

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default async function dbConnect(collectionName) {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  return db.collection(collectionName);
}
