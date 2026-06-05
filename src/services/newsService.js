import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_KEY;

export const getNews = async (category = "technology") => {
  const response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${API_KEY}`
  );

  return response.data.articles;
};