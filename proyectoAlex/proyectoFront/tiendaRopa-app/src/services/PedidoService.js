import axios from "./axiosConfig";

const baseUrl = "http://localhost:8080/pedidos";

export const listadoPedidos = async () => {
  try {
    const response = await axios.get(baseUrl + "/listarPedidos");
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export const borrarPedidoPorId = async (id) => {
  try {
    const response = await axios.delete(baseUrl + "/borrar/" + id);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}
// Creo un pedido a través de los productos del carrito del usuario
export const crearPedidoDesdeCarrito = async (idUsuario) => {
  try {
    const response = await axios.post(`${baseUrl}/crearPedido/${idUsuario}`);
    return response;
  } catch (error) {
    console.error("Error al crear el pedido desde el carrito:", error.response?.data || error.message);
    throw error;
  }
};