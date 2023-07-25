export const GenericCrudInputs = `#graphql
    input CompanyInput {
        name: String!
    }

    input BusInput {
        lineId: ID!
        serialNumber: String!
        capacity: Int
        state: String
        latitude: Float
        longitude: Float
        isAccessibility: Boolean
    }

    input LineInput {
        companyId: ID!
        departure: String
        arrival: String
        lineNumber: Int!
        fareRange: String
        description: String
        rating: Float
    }

    input ScheduleInput {
        lineId: ID!
        dayIndex: Int!
        startTime: String!
        endTime: String!
        frequency: Int!
        averageTravelDuration: Float!
    }

    input StopInput {
        name: String!
        state: StopState!
        latitude: Float!
        longitude: Float!
        isAccessible: Boolean!
        isOkForDisabled: Boolean
    }

    input PlaceInput {
        address: String!
        latitude: Float!
        longitude: Float!
    }

    input ItineraryInput {
        origin: PlaceInput!
        destination: PlaceInput!
    }
`;
