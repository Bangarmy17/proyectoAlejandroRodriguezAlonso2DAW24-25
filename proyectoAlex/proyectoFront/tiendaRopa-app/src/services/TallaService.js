import axios from "./axiosConfig";

const baseUrl="http://localhost:8080/tallas";

export const findAllTallas = async () =>{
  try{
    const response = await axios.get(baseUrl)
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}