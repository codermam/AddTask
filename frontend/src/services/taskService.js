import axios from "axios";

const API_URL =
  "https://addtask-wpyp.onrender.com/api/tasks";
export const createTask = async (token, data) => {
  const res = await axios.post(
    API_URL,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


export const getTasks = async (token) => {
  const res = await axios.get(
    API_URL,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};


export const getStats = async (token) => {
  const res = await axios.get(
    `${API_URL}/stats`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};


export const toggleTask = async (token, id) => {
  const res = await axios.patch(
    `${API_URL}/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


export const deleteTask = async (token, id) => {
  const res = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  return res.data;
};
export const updateTask = async (token, id, data) => {
  const res = await axios.put(
    `${API_URL}/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};