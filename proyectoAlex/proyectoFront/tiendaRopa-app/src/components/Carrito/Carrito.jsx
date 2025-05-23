import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  cargarCarrito,
  eliminarProductoDelCarrito,
} from "../../services/CarritoService";
import { CarritoProductoCard } from "./CarritoProductoCard";
import "../../estilosCarrito.css";

export const Carrito = ({}) => {
  const [productos, setProductos] = useState([]);
  //creo esta funcion para que al cargar el carrito
  //si no hay productos redirija a la pagina de inicio
  const navigate = useNavigate();
  //Obtengo el id del usuario logeado por que de esta manera
  //no me pasa un "error" que era que tenia que recargar la pagina para que
  //le muestre los productos
  const idUsuario = localStorage.getItem("userId");

  const cargarCarritoUsuario = async () => {
    // Llamo a la funcion que tengo para cargar los productos
    // en el carrito del usuario que esté logeado
    const response = await cargarCarrito(idUsuario);
    if (response && response.data) {
      //En caso de que el carrito esté vacio mando un alert
      if (response.data.length === 0) {
        alert("El carrito está vacío."); //Ya sé que no es lo mejor andar usando alerts
        //pero era la opción más comoda
        navigate("/"); // Redirige a la pagina de inicio
      } else {
        setProductos(response.data);
      }
    }
  };
  useEffect(() => {
    if (idUsuario) cargarCarritoUsuario();
  }, [idUsuario, navigate]);
  const handleEliminarProducto = async (idProducto) => {
    await eliminarProductoDelCarrito(idUsuario, idProducto);
    // Actualiza el carrito después de eliminar el producto
    cargarCarritoUsuario();
  };

  return (
    <div className="carrito-container">
      <h4 className="carrito-title text-center mt-2 mb-3">Mi Carrito</h4>
      <div className="row g-2 align-items-stretch">
        {productos.map((producto) => (
          <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
            <CarritoProductoCard
              producto={producto}
              handleEliminar={handleEliminarProducto}
            />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center gap-3 mt-3 mb-5">
        <button className="btn btn-success btn-lg" type="button">
          Realizar Pedido
        </button>
        <button
          className="btn btn-secondary btn-lg"
          type="button"
          onClick={() => navigate("/")} //redirijo a la pagina de inicio
        >
          Inicio
        </button>
      </div>
    </div>
  );
};
