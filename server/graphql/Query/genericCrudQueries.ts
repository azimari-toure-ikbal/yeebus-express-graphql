export const GenericCrudQueries = `#graphql
    type Query {
        # Companies Query
        companies: [Company!]
        company(companyName: String!): Company

        # Buses Query
        buses: [Bus!]
        bus(busId: ID!): Bus

        # Lines Query
        lines: [Line!]
        linesByCompany(companyId: ID!): [Line!]

        # Stops Query
        stops: [Stop!]
        stop(stopId: ID!): Stop
        
        # LineStops Query
        #lineStops: [LineStop!]

        # Schedules Query
        schedules: [Schedule!]
        schedulesByLine(lineId: ID!): [Schedule!]
    }
`;
