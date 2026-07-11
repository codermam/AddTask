import axios from "axios";

const API_URL = "http://localhost:5000/api/activity";

export const getActivities = (token) => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};