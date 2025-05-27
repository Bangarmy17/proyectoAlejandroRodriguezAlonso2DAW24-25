import axios from "./axiosConfig";

const baseUrl="http://localhost:8080/producto";

// Peticion Get que obtiene todos los productos devolviendo solo los campos del DTO
// y además es la peticion que uso para mostrar los prods en la página principal
export const findAll = async () =>{
  try{
    const response = await axios.get(baseUrl)
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
//Peticion POST con la que podré crear los productos
// {nombre, descripcion, precio, stock, categoria, talla, rutaImagen}
export const create = async (producto) => { // producto es un objeto JS
  try {
    const response = await axios.post(baseUrl, producto); 
    return response;
  } catch (error) {
    console.log("Error peticion POST: " + error);
  }
  return undefined;
};

//Peticion PUT con la que podré modificar los productos
// {id, nombre, descripcion, precio, stock, categoria, talla, rutaImagen}
export const update = async (producto) => { 
  try {
    const response = await axios.put(
      `${baseUrl}/modificarProductoPorId/${producto.id}`, // Asumiendo que producto tiene .id
      producto 
    );
    return response;
  } catch (error) {
    console.log("Error peticion PUT: " + error);
  }
  return undefined;
};
//DELETE 
export const remove = async(id) =>{
  try{
    await axios.delete(baseUrl + '/' + id);
  }catch(error){
    console.log(error)
  }
}
//-----------------------------------------FILTROS------------------------------------
export const findPrecioAsc = async () =>{
  try{
    const response = await axios.get(baseUrl + "/filtrado/precioAsc")
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
export const findPrecioDesc = async () =>{
  try{
    const response = await axios.get(baseUrl + "/filtrado/precioDes")
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
export const findNombreAsc = async () =>{
  try{
    const response = await axios.get(baseUrl + "/filtrado/prodAsc")
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
export const findNombreDesc = async () =>{
  try{
    const response = await axios.get(baseUrl + "/filtrado/prodDes")
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
export const findByCategoria = async (idCategoria) =>{
  try{
    const response = await axios.get(baseUrl + "/filtrado/categoria/" + idCategoria)
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
export const findByTalla = async (idTalla) =>{
  try{
    const response = await axios.get(baseUrl + "/filtrado/talla/" + idTalla)
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}