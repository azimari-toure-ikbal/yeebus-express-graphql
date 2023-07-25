import axios from "axios";
import baseAPIURL from "../../helper/apiUrl.ts";

const baseUrl = baseAPIURL();

export const scheduleResolvers = {
  Query: {
    schedules: async () => {
      const { data, status } = await axios.get(`${baseUrl}/schedules`);

      if (status > 299) {
        throw new Error("Error fetching schedules");
      }

      return data;
    },

    schedulesByLine: async (_: any, args) => {
      const { lineId } = args;
      const { data, status } = await axios.get(
        `${baseUrl}/schedules/${lineId}`
      );

      if (status > 299) {
        throw new Error("Error fetching schedules");
      }

      return data;
    },
  },

  Mutation: {
    createSchedule: async (_: any, args) => {
      const { schedule } = args;
      const { data, status } = await axios.post(
        `${baseUrl}/schedules`,
        schedule
      );

      if (status > 299) {
        throw new Error("Error creating schedule");
      }

      return data;
    },

    updateSchedule: async (_: any, args) => {
      const { scheduleId, schedule } = args;
      const { data, status } = await axios.put(
        `${baseUrl}/schedules/${scheduleId}`,
        schedule
      );

      if (status > 299) {
        throw new Error("Error updating schedule");
      }

      return data;
    },

    deleteSchedule: async (_: any, args) => {
      const { scheduleId } = args;
      const { data, status } = await axios.delete(
        `${baseUrl}/schedules/${scheduleId}`
      );

      if (status > 299) {
        throw new Error("Error deleting schedule");
      }

      return data;
    },
  },
};
