import axios from "axios";

const baseUrl = "http://localhost:8080/api/";

export const resolvers = {
  Query: {
    companies: async () => {
      const { data, status } = await axios.get(`${baseUrl}companies`);

      if (status !== 200) {
        throw new Error("Error fetching companies");
      }

      return data;
    },
    buses: async () => {
      const { data, status } = await axios.get(`${baseUrl}buses`);

      if (status !== 200) {
        throw new Error("Error fetching buses");
      }

      return data;
    },
    lines: async () => {
      const { data, status } = await axios.get(`${baseUrl}lines`);

      if (status !== 200) {
        throw new Error("Error fetching lines");
      }

      return data;
    },
    lineStops: async () => {
      const { data, status } = await axios.get(`${baseUrl}lineStops`);

      if (status !== 200) {
        throw new Error("Error fetching lineStops");
      }

      return data;
    },
    schedules: async () => {
      const { data, status } = await axios.get(`${baseUrl}schedules`);

      if (status !== 200) {
        throw new Error("Error fetching schedules");
      }

      return data;
    },
    stops: async () => {
      const { data, status } = await axios.get(`${baseUrl}stops`);

      if (status !== 200) {
        throw new Error("Error fetching stops");
      }

      return data;
    },
  },
};
