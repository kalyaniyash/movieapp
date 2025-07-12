import axios from "axios";

export const movieApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:8081"
})