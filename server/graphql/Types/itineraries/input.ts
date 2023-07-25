export const ItineratiesInputs = `#graphql
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
