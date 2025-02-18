import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://admin:kj984dfoSU9vc5HS@cluster0.iwtty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyAula");
