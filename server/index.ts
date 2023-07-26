import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { config } from "dotenv";
import {
  MapRelatedTypes,
  GenericCrudInputs,
  GenericCrudQueries,
  GenericCrudMutations,
  companyResolvers,
  busResolvers,
  lineResolvers,
  scheduleResolvers,
  stopResolvers,
} from "./graphql/helper/mapRelatedExports.ts";
import {
  itineraryResolvers,
  positionResolvers,
  ItineratiesInputs,
  itinerariesTypes,
  itinerariesQueries,
} from "./graphql/helper/itinerariesRelatedExports.ts";
import cors from "cors";
import bodyParser from "body-parser";

config();

const port = process.env.PORT || 3000;
const app = express();

const server = new ApolloServer({
  typeDefs: [
    GenericCrudInputs,
    GenericCrudQueries,
    GenericCrudMutations,
    MapRelatedTypes,
    ItineratiesInputs,
    itinerariesTypes,
    itinerariesQueries,
  ],
  resolvers: [
    companyResolvers,
    busResolvers,
    lineResolvers,
    scheduleResolvers,
    stopResolvers,
    itineraryResolvers,
    positionResolvers,
  ],
  status400ForVariableCoercionErrors: true,
  // formatError: (error) => {
  //   // console.log(error);
  //   return {
  //     message: error.message,
  //     extensions: {
  //       code: error.extensions?.code,
  //       timestamp: error.extensions?.timestamp,
  //     },
  //   };
  // },
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

app.listen(port, () => {
  console.log(`Server listening on port ${port} 🚀`);
});
