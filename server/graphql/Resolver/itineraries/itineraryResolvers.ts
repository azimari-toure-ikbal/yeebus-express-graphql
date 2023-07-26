import axios from "axios";

const baseUrl = "http://localhost:8081/api/itinerary";

export const itineraryResolvers = {
	  Query: {
			itineraries: async (_: any, args) => {
				const { input } = args;
				const { data, status } = await axios.post(
					`${baseUrl}/generate`,
					input
				);
				console.log(data);
				console.log(status);
				if (status > 299) {
					throw new Error("Error fetching itineraries");
				}
				return data;
			}
	  },
};