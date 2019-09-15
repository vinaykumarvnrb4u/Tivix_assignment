import axios from "axios";

const apiUrl = "https://samples.openweathermap.org/data/2.5/"
export const client = axios.create({
  baseURL: apiUrl,
  // headers:{
  //   'X-Requested-With': 'XMLHttpRequest'
  // }
})
