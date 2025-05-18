// src/api.js
import axios from 'axios';
const baseUrl = 'https://committed-delight-2680eb60f9.strapiapp.com';

const API_BASE_URL = `${baseUrl}/api`;

export const getPeople = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/people?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching people:', error);
    return [];
  }
};
export const getPublications = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/publications?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching publications:', error);
    return [];
  }
};