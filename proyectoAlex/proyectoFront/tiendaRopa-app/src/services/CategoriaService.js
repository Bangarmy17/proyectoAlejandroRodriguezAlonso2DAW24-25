import axios from "./axiosConfig";

const baseUrl="http://localhost:8080/categorias";

export const findAllCategorias = async () =>{
  try{
    const response = await axios.get(baseUrl)
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}