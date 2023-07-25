import axios from "axios";
import baseAPIURL from "../../helper/apiUrl.ts";

const baseUrl = baseAPIURL();

export const companyResolvers = {
  Query: {
    companies: async () => {
      const { data, status } = await axios.get(`${baseUrl}/companies`);

      if (status > 299) {
        throw new Error("Error fetching companies");
      }

      return data;
    },

    company: async (_: any, args) => {
      const { companyName } = args;
      const { data, status } = await axios.get(
        `${baseUrl}/companies/${companyName}`
      );
      console.log(data);
      console.log(status);
      if (status > 299) {
        throw new Error("Error fetching company");
      }

      return data;
    },
  },

  Mutation: {
    createCompany: async (_: any, args) => {
      const { company } = args;
      const { data, status } = await axios.post(
        `${baseUrl}/companies`,
        company
      );

      if (status > 299) {
        throw new Error("Error creating company");
      }

      return data;
    },

    updateCompany: async (_: any, args) => {
      const { companyId, company } = args;
      const { data, status } = await axios.put(
        `${baseUrl}/companies/${companyId}`,
        company
      );

      if (status > 299) {
        throw new Error("Error updating company");
      }

      return data;
    },

    deleteCompany: async (_: any, args) => {
      const { companyId } = args;
      const { data, status } = await axios.delete(
        `${baseUrl}/companies/${companyId}`
      );

      if (status > 299) {
        throw new Error("Error deleting company");
      }

      return data;
    },
  },
};
