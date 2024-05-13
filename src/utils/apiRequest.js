import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_SERVER,
});

export default apiRequest;