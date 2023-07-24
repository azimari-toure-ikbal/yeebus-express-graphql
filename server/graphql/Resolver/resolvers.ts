import axios from "axios";
import {
  Client,
  Language,
  PlaceInputType,
} from "@googlemaps/google-maps-services-js";

const client = new Client({});
const baseUrl = "http://localhost:8080/api";

export const resolvers = {
  Query: {
    // Companies Query
    companies: async () => {
      const { data, status } = await axios.get(`${baseUrl}/company`);

      if (status > 299) {
        throw new Error("Error fetching companies");
      }

      let found_place_id = await findPlace();

      let place_details = await getPlaceDetails(found_place_id);

      console.log(place_details);

      return data;
    },

    company: async (_: any, args) => {
      const { companyName } = args;
      const { data, status } = await axios.get(`${baseUrl}/company/${companyName}`);
      console.log(data);
      console.log(status);
      if (status > 299) {
        throw new Error("Error fetching company");
      }

      return data;
    },

    // Buses Query
    buses: async () => {
      const { data, status } = await axios.get(`${baseUrl}/buses`);

      if (status > 299) {
        throw new Error("Error fetching buses");
      }

      return data;
    },

    bus: async (_: any, args) => {
      const { busId } = args;
      const { data, status } = await axios.get(`${baseUrl}/buses/${busId}`);

      if (status > 299) {
        throw new Error("Error fetching bus");
      }

      return data;
    },

    // Lines Query
    lines: async () => {
      const { data, status } = await axios.get(`${baseUrl}/lines`);

      if (status > 299) {
        throw new Error("Error fetching lines");
      }

      return data;
    },

    linesByCompany: async (_: any, args) => {
      const { companyId } = args;
      const { data, status } = await axios.get(`${baseUrl}/lines/${companyId}`);

      if (status > 299) {
        throw new Error("Error fetching line");
      }

      return data;
    },

    // LineStops Query
    // lineStops: async () => {
    //   const { data, status } = await axios.get(`${baseUrl}/lineStops`);

    //   if (status > 299) {
    //     throw new Error("Error fetching lineStops");
    //   }

    //   return data;
    // },

    // Schedules Query
    schedules: async () => {
      const { data, status } = await axios.get(`${baseUrl}/schedules`);

      if (status > 299) {
        throw new Error("Error fetching schedules");
      }

      return data;
    },

    schedulesByLine: async (_: any, args) => {
      const { lineId } = args;
      const { data, status } = await axios.get(`${baseUrl}/schedules/${lineId}`);

      if (status > 299) {
        throw new Error("Error fetching schedules");
      }

      return data;
    },

    // Stops Query
    stops: async () => {
      const { data, status } = await axios.get(`${baseUrl}/stops`);

      if (status > 299) {
        throw new Error("Error fetching stops");
      }

      return data;
    },

    stop: async (_: any, args) => {
      const { stopId } = args;
      const { data, status } = await axios.get(`${baseUrl}/stop/${stopId}`);

      if (status > 299) {
        throw new Error("Error fetching stop");
      }

      return data;
    }
  },

  Mutation: {
    // Companies Mutation
    createCompany: async (_: any, args) => {
      const { company } = args;
      const { data, status } = await axios.post(`${baseUrl}/company`, company);

      if (status > 299) {
        throw new Error("Error creating company");
      }

      return data;
    },

    updateCompany: async (_: any, args) => {
      const { companyId, company } = args;
      const { data, status } = await axios.put(`${baseUrl}/company/${companyId}`, company);

      if (status > 299) {
        throw new Error("Error updating company");
      }

      return data;
    },

    deleteCompany: async (_: any, args) => {
      const { companyId } = args;
      const { data, status } = await axios.delete(`${baseUrl}/company/${companyId}`);

      if (status > 299) {
        throw new Error("Error deleting company");
      }

      return data;
    },

    // Buses Mutation
    createBus: async (_: any, args) => {
      const { bus } = args;
      const { data, status } = await axios.post(`${baseUrl}/buses`, bus);
      console.log(data);
      console.log(status);
      if (status > 299) {
        throw new Error("Error creating bus");
      }

      return data;
    },

    updateBus: async (_: any, args) => {
      const { busId, bus } = args;
      const { data, status } = await axios.put(`${baseUrl}/buses/${busId}`, bus);

      if (status > 299) {
        throw new Error("Error updating bus");
      }

      return data;
    },

    deleteBus: async (_: any, args) => {
      const { busId } = args;
      const { data, status } = await axios.delete(`${baseUrl}/buses/${busId}`);

      if (status > 299) {
        throw new Error("Error deleting bus");
      }

      return data;
    },

    // Lines Mutation
    createLine: async (_: any, args) => {
      const { line } = args;
      const { data, status } = await axios.post(`${baseUrl}/lines`, line);

      if (status > 299) {
        throw new Error("Error creating line");
      }

      return data;
    },

    updateLine: async (_: any, args) => {
      const { lineId, line } = args;
      const { data, status } = await axios.put(`${baseUrl}/lines/${lineId}`, line);

      if (status > 299) {
        throw new Error("Error updating line");
      }

      return data;
    },

    deleteLine: async (_: any, args) => {
      const { lineId } = args;
      const { data, status } = await axios.delete(`${baseUrl}/lines/${lineId}`);

      if (status > 299) {
        throw new Error("Error deleting line");
      }

      return data;
    },

    // Schedules Mutation
    createSchedule: async (_: any, args) => {
      const { schedule } = args;
      const { data, status } = await axios.post(`${baseUrl}/schedules`, schedule);

      if (status > 299) {
        throw new Error("Error creating schedule");
      }

      return data;
    },

    updateSchedule: async (_: any, args) => {
      const { scheduleId, schedule } = args;
      const { data, status } = await axios.put(`${baseUrl}/schedules/${scheduleId}`, schedule);

      if (status > 299) {
        throw new Error("Error updating schedule");
      }

      return data;
    },

    deleteSchedule: async (_: any, args) => {
      const { scheduleId } = args;
      const { data, status } = await axios.delete(`${baseUrl}/schedules/${scheduleId}`);

      if (status > 299) {
        throw new Error("Error deleting schedule");
      }

      return data;
    },

    // Stops Mutation
    createStop: async (_: any, args) => {
      const { stop } = args;
      const { data, status } = await axios.post(`${baseUrl}/stops`, stop);

      if (status > 299) {
        throw new Error("Error creating stop");
      }

      return data;
    },

    updateStop: async (_: any, args) => {
      const { stopId, stop } = args;
      const { data, status } = await axios.put(`${baseUrl}/stops/${stopId}`, stop);

      if (status > 299) {
        throw new Error("Error updating stop");
      }

      return data;
    },

    deleteStop: async (_: any, args) => {
      const { stopId } = args;
      const { data, status } = await axios.delete(`${baseUrl}/stops/${stopId}`);

      if (status > 299) {
        throw new Error("Error deleting stop");
      }

      return data;
    }
  }
};

async function findPlace(): Promise<string> {
  try {
    const response = await client.findPlaceFromText({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        input: "Mermoz Sacre-coeur, Dakar",
        inputtype: PlaceInputType.textQuery,
        language: Language.fr,
      },
    });

    // Récupérer le place_id à partir de la réponse et l'affecter à found_place_id
    return response.data.candidates[0].place_id;
    // Vous pouvez également ajouter un console.log pour vérifier la valeur trouvée
    console.log("Place ID trouvé :", response.data.candidates[0].place_id);
  } catch (error) {
    console.log(error);
  }
}

async function getPlaceDetails(place_id: string) {
  try {
    const response = await client.placeDetails({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        language: Language.en,
        place_id: place_id,
      },
    });

    return response.data.result;
  } catch (error) {
    console.log(error);
  }
}

// async function getPlacePhoto(photo_reference: string) {
//   try {
//     const data = await client.placePhoto({
//       params: {
//         key: process.env.GOOGLE_MAPS_API_KEY,
//         photoreference: photo_reference,
//       },
//       responseType: "stream",
//     });

//     return data.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
