import axios from "axios";
const api = axios.create({
  baseURL: "http://10.0.2.2:8000",
  // baseURL: "http://192.168.8.100:8000",
});
export default api;
