import { MapRelatedTypes } from "../Types/genericCrud/types.ts";
import { MapRelatedInputs } from "../Types/genericCrud/inputs.ts";
import { MapRelatedQueries } from "../Query/genericCrudQueries.ts";
import { MapRelatedMutations } from "../Mutation/genericCrudMutations.ts";
import { companyResolvers } from "../Resolver/gericCrud/companyResolvers.ts";
import { busResolvers } from "../Resolver/gericCrud/busResolvers.ts";
import { lineResolvers } from "../Resolver/gericCrud/lineResolvers.ts";
import { scheduleResolvers } from "../Resolver/gericCrud/scheduleResolvers.ts";
import { stopResolvers } from "../Resolver/gericCrud/stopResolvers.ts";

export {
  MapRelatedTypes,
  MapRelatedInputs,
  MapRelatedQueries,
  MapRelatedMutations,
  companyResolvers,
  busResolvers,
  lineResolvers,
  scheduleResolvers,
  stopResolvers,
};
