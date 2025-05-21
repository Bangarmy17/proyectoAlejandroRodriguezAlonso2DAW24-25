import axios from "axios";

const baseUrl="http://localhost:8080/carrito";

export const cargarCarrito = async (idUsuario) => {
  try {
    const response = await axios.get(baseUrl + "/" + idUsuario);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}

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

export const eliminarProductoDelCarrito = async (idUsuario, idProducto) => {
  try {
    const response = await axios.delete(baseUrl + "/eliminar/" + idUsuario + "/" + idProducto);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}