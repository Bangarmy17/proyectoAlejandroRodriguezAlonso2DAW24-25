import axios from "./axiosConfig";

const baseUrl="http://localhost:8080/carrito";

// Peticion GET
export const cargarCarrito = async (idUsuario) => {
  try {
    const response = await axios.get(baseUrl + "/" + idUsuario);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
// Peticion POST
export const agregarProductoAlCarrito = async (idUsuario, idProducto, cantidad) => {
  try {
    const response = await axios.post(
      baseUrl + "/agregar/" + idUsuario + "/" + idProducto + "/" + cantidad
    );
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
// Peticion DELETE
export const eliminarProductoDelCarrito = async (idUsuario, idProducto) => {
  try {
    const response = await axios.delete(baseUrl + "/eliminar/" + idUsuario + "/" + idProducto);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}