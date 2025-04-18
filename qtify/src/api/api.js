import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const reponse = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const reponse = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
