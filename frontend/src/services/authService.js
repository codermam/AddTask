import axios from "axios";

const API = axios.create({
  baseURL: "https://addtask-wpyp.onrender.com/api/auth",
});

export const signupUser = (data) =>
  API.post("/signup", data);

export const loginUser = (data) =>
  API.post("/login", data);

export const getCurrentUser = (token) =>
  API.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });