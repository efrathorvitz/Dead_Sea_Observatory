// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api';

export const getPeople = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/people?populate[photo]=true&populate[links]=true`);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching people:', error);
    return [];
  }
};
