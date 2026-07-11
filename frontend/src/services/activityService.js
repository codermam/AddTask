import axios from "axios";

const API_URL =
  "https://addtask-wpyp.onrender.com/api/tasks";
  
export const getActivities = (token) => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};