export const typeDefs = `#graphql
    type Query {
        helloWorld: String!,
        test: String!,
        bus: [Bus!]!,
    },

    type Bus {
        id: ID!,
        name: String!,
        number: String!,
    }
`;
