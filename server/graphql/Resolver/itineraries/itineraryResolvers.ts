import axios from "axios";

const baseUrl = "http://localhost:8081/api/itinerary";

export const itineraryResolvers = {
	  Query: {
			itineraries: async (_: any, args) => {
				const { input } = args;
				// console.log("inp");
				// console.log(input);
				const { data, status } = await axios.post(
					`${baseUrl}/generate`,
					input
				);
				// console.log("data");
				// console.log(data);
				// console.log("sections");
				//decode and print sections
				const sections = data.sections;
				// console.log(sections);				
				// console.log("status");
				// console.log(status);
				if (status > 299) {
					throw new Error("Error fetching itineraries");
				}
				return data;
			}
	  },
};