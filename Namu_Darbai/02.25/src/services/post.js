import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data) => {
  // const response = 
  await axios.post(API_URL, data);
};

export default postData;
