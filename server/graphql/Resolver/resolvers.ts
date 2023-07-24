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
    companies: async () => {
      const { data, status } = await axios.get(`${baseUrl}/companies`);

      if (status !== 200) {
        throw new Error("Error fetching companies");
      }

      let found_place_id = await findPlace();

      let place_details = await getPlaceDetails(found_place_id);

      console.log(place_details);

      return data;
    },
    buses: async () => {
      const { data, status } = await axios.get(`${baseUrl}/buses`);

      if (status !== 200) {
        throw new Error("Error fetching buses");
      }

      return data;
    },
    lines: async () => {
      const { data, status } = await axios.get(`${baseUrl}/lines`);

      if (status !== 200) {
        throw new Error("Error fetching lines");
      }

      return data;
    },
    lineStops: async () => {
      const { data, status } = await axios.get(`${baseUrl}/lineStops`);

      if (status !== 200) {
        throw new Error("Error fetching lineStops");
      }

      return data;
    },
    schedules: async () => {
      const { data, status } = await axios.get(`${baseUrl}/schedules`);

      if (status !== 200) {
        throw new Error("Error fetching schedules");
      }

      return data;
    },
    stops: async () => {
      const { data, status } = await axios.get(`${baseUrl}/stops`);

      if (status !== 200) {
        throw new Error("Error fetching stops");
      }

      return data;
    },
  },
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
