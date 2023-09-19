import axios from "axios";
import { BASE_URL } from "./Constans";
const config = {
  Headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const callAPI = async (res) => {
  const data = await axios.get(`${BASE_URL}/${res}`, config);
  return data;
};
