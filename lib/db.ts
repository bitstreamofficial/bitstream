import { MongoClient, Db } from 'mongodb';

// Do NOT throw at module import time. Many deployment platforms (including
// Vercel) import modules during build and this would cause the build to fail
// if the environment variable isn't set at build time. Instead, lazily throw
// when `connectToDatabase` is actually called and the URI is missing.
const uri = process.env.MONGODB_URI || '';
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (uri) {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  if (!clientPromise) {
    throw new Error(
      'MONGODB_URI is not configured. Set the MONGODB_URI environment variable.'
    );
  }

  const client = await clientPromise;
  const db = client.db('bitstream'); // Replace with your database name
  return { client, db };
}

export default clientPromise;
