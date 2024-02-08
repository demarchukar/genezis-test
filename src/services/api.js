import axios from "axios";
import TokenService from "@/services/token.service";
const clientId = import.meta.env.VITE_APP_CLIENT_ID;
const apiAuthUrl = import.meta.env.VITE_APP_API_AUTH_URL;

const apiInstance = axios.create({
  baseURL: 'https://' + TokenService.getDomain(),
  headers: {
    "Content-Type": "application/json",
  },
});

const authInstance = axios.create({
  baseURL: apiAuthUrl,
  headers: {
    "Content-Type": "application/json",
    "x-client-id": clientId,
  },
  withCredentials: true,
});

export { apiInstance, authInstance };