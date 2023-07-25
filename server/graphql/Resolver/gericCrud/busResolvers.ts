import axios from "axios";
import baseAPIURL from "../../helper/apiUrl.ts";

const baseUrl = baseAPIURL();

export const busResolvers = {
  Query: {
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
  },

  Mutation: {
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
      const { data, status } = await axios.put(
        `${baseUrl}/buses/${busId}`,
        bus
      );

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
  },
};
