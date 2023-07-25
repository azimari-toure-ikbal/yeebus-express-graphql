import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { config } from "dotenv";
import {
  MapRelatedTypes,
  MapRelatedInputs,
  MapRelatedQueries,
  MapRelatedMutations,
  companyResolvers,
  busResolvers,
  lineResolvers,
  scheduleResolvers,
  stopResolvers,
} from "./graphql/helper/mapRelatedExports.ts";
import cors from "cors";
import bodyParser from "body-parser";

config();

const port = process.env.PORT || 3000;
const app = express();

const server = new ApolloServer({
  typeDefs: [
    MapRelatedInputs,
    MapRelatedTypes,
    MapRelatedQueries,
    MapRelatedMutations,
  ],
  resolvers: [
    companyResolvers,
    busResolvers,
    lineResolvers,
    scheduleResolvers,
    stopResolvers,
  ],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

app.listen(port, () => {
  console.log(`Server listening on port ${port} 🚀`);
});
