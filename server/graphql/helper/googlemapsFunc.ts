import {
  Client,
  Language,
  PlaceInputType,
} from "@googlemaps/google-maps-services-js";

const client = new Client({});

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
