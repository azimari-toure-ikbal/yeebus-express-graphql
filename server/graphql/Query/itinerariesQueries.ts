export const itinerariesQueries = `#graphql
	type Query {
		# Itineraries Query
		itineraries(input: ItineraryInput): [Itinerary!]
	}
`;