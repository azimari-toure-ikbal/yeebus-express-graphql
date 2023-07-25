import axios from "axios";
import baseAPIURL from "../../helper/apiUrl.ts";

const baseUrl = baseAPIURL();

export const stopResolvers = {
  Query: {
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
    },
  },

  Mutation: {
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
      const { data, status } = await axios.put(
        `${baseUrl}/stops/${stopId}`,
        stop
      );

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
    },
  },
};
