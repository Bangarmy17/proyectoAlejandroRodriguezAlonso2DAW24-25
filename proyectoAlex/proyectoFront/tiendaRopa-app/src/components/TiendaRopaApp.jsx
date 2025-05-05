import { useEffect, useState } from "react";
import { create, findAll, update } from "../services/ProductoService";
import { ProductoGrid } from "./ProductoGrid";
import { CreacionProductoForm } from "./CreacionProductoFrom";

export const TiendaRopaApp = () => {
  const [productos, setProductos] = useState([]);

  const [productoSelected, setProductoSelected] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  const getProductos = async () => {
    try {
      // LLamo a la funcion del servicio que es una peticion GET que me deberia mostrar todos los productos
      const result = await findAll();

      if (result && result.data) {
        //si se obtiene el resultado invoco el setProductos con los resultados que obtuve de la peticion
        setProductos(result.data);
      } else {
        //en caso contrario devuelve por consola un error
        console.error("Error la estructura de la API no es la correcta");
        setProductos([]);
      }
    } catch (error) {
      console.error("Error al obtener los productos", error);
      setProductos([]);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  //   agregar o modificar producto
  const handlerAddProducto = async (producto) => {
    //si es un producto existente en lugar de crear un producto lo que voy a hacer es modificarlo
    if (producto.id > 0) {
      const response = await update(producto);
      setProductos(
        productos.map((prod) => {
          // en caso de que el nuevo producto coincidiese con el id de uno de los productos de la lista lo remplazo
          if (prod.id == response.data.id) {
            return { ...response.data };
          }
          return prod;
        })
      );
    } else {
      const response = await create(producto);
      setProductos([...productos, { ...response.data }]);
    }
  };
  //   borrar producto
  const handlerRemoveProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id != id));
  };
  //
  const handlerProductoSelected = (producto) => {
    setProductoSelected({ ...producto });
  };
  return (
    <>
      <div className="container my-4">
        <h1>Productos</h1>
        <div className="row">
          <div className="col">
            <CreacionProductoForm
              handlerAdd={handlerAddProducto}
              productoSelected={productoSelected}
            />
          </div>
          <div className="row my-4">
            <div className="col">
              <ProductoGrid
                productos={productos}
                handlerRemove={handlerRemoveProducto}
                handlerUpdate={handlerProductoSelected}
              ></ProductoGrid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
