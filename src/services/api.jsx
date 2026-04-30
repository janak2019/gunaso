import axios from "axios";

const API = axios.create({
  baseURL: "https://gunaso-backend.onrender.com",
  
});

export default API;