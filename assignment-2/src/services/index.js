import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/"
export const client = axios.create({
  baseURL: apiUrl
})
