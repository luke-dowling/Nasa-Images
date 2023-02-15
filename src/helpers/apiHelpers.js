import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getNasaHeroImage = async () => {
  const { data } = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  return data;
};

export const getNasaImages = async () => {
  const { data } = await axios.get(
    `https://api.nasa.gov/planetary/apod?count=6&api_key=${API_KEY}`
  );

  return data;
};
