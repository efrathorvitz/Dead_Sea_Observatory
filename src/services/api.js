import axios from 'axios';

const baseUrl = 'https://committed-delight-2680eb60f9.strapiapp.com';
//const baseUrl = 'https://attractive-canvas-7b6d0f80fe.strapiapp.com';
export const fetchEntities = async (collectionName) => {
  try {
    console.log("fetch  "+collectionName)
    const response = await axios.get(`${baseUrl}/api/${collectionName}?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    throw error;
  }
};
