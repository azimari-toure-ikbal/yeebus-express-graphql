export const ItineratiesInputs = `#graphql
    input PlaceInput {
        name: String!
        latitude: Float!
        longitude: Float!
    }

    input ItineraryInput {
        origin: PlaceInput!
        destination: PlaceInput!
    }
`;
