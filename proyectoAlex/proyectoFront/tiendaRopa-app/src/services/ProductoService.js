import axios from "axios";

const baseUrl="http://localhost:8080/producto";

export const findAll = async () =>{
  try{
    const response = await axios.get(baseUrl + "/listadoProductos")
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export const create = async ({nombre,descripcion,precio,stock})=>{
  try{
    const response = await axios.post(baseUrl + "/crearProductos",{nombre:nombre, descripcion:descripcion, precio:precio, stock:stock})
    return response;
  }catch(error){
    console.log(error);
  }
  return undefined;
}

export const update = async({id,nombre,descripcion,precio,stock})=>{
  try{
    const response = await axios.put(baseUrl + "/modificarProductoPorId/" + id, {nombre:nombre, descripcion:descripcion, precio:precio, stock:stock})
    return response;
  }catch(error){
    console.log(error);
  }
  return undefined;
}