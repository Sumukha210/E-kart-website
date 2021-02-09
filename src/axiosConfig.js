import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_URL });

API.interceptors.request.use(req => {
  if (sessionStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(sessionStorage.getItem("profile")).token
    }`;
  }

  return req;
});
