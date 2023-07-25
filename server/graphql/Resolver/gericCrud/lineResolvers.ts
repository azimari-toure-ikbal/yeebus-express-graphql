import axios from "axios";
import baseAPIURL from "../../helper/apiUrl.ts";

const baseUrl = baseAPIURL();

export const lineResolvers = {
  Query: {
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
  },

  Mutation: {
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
      const { data, status } = await axios.put(
        `${baseUrl}/lines/${lineId}`,
        line
      );

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
  },
};
