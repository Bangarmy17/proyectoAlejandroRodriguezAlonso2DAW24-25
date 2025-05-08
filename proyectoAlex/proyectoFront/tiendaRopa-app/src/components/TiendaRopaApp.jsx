import { useEffect, useState } from "react";
import { ProductoCard } from "./Producto/ProductoCard";
import { findAll } from "../services/ProductoService";
import { CargarProd } from "./Producto/CargarProd";
export const TiendaRopaApp = () => {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      // LLamo a la funcion del servicio que es una peticion GET que me deberia mostrar todos los productos
      const result = await findAll();
      // console.log("prods", result.data);
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
  return <CargarProd></CargarProd>;
};
