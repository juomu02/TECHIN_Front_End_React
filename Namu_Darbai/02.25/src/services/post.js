import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data) => {
  return await axios.post(API_URL, data);
};

export default postData;
