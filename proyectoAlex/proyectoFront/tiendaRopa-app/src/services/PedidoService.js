import axios from "axios";

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