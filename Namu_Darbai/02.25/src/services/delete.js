import axios from "axios";
import { getOne } from "./get";

const API_URL = import.meta.env.VITE_API_URL;

const deleteData = async (id) => {
  const user = await getOne(id);

  const confirm = window.confirm(
    `Ar tikrai norite ištrinti vartotoją ${user.name}`,
  );

  if (!confirm) return;
  console.log("aaa");
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default deleteData;
