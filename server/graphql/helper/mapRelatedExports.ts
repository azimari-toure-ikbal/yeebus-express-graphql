import { MapRelatedTypes } from "../Types/genericCrud/types.ts";
import { GenericCrudInputs } from "../Types/genericCrud/inputs.ts";
import { GenericCrudQueries } from "../Query/genericCrudQueries.ts";
import { GenericCrudMutations } from "../Mutation/genericCrudMutations.ts";
import { companyResolvers } from "../Resolver/gericCrud/companyResolvers.ts";
import { busResolvers } from "../Resolver/gericCrud/busResolvers.ts";
import { lineResolvers } from "../Resolver/gericCrud/lineResolvers.ts";
import { scheduleResolvers } from "../Resolver/gericCrud/scheduleResolvers.ts";
import { stopResolvers } from "../Resolver/gericCrud/stopResolvers.ts";

export {
  MapRelatedTypes,
  GenericCrudInputs,
  GenericCrudQueries,
  GenericCrudMutations,
  companyResolvers,
  busResolvers,
  lineResolvers,
  scheduleResolvers,
  stopResolvers
};
