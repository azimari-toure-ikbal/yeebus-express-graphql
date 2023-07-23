import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { config } from "dotenv";
import { typeDefs } from "./graphql/Types/types.ts";
import { resolvers } from "./graphql/Resolver/resolvers.ts";
import cors from "cors";
import bodyParser from "body-parser";

config();

const port = process.env.PORT || 3000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} 🚀`);
});
