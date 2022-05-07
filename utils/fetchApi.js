import axios, { AxiosResponse } from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "6aaa746e64msh430cf3769a0d0a4p1a57e5jsn174a9d551d59",
    },
  });

  return data;
};
