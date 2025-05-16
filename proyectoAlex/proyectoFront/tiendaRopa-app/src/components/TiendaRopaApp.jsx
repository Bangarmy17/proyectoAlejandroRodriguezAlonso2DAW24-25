import { useEffect, useState } from "react";
import { findAll } from "../services/ProductoService";
import { CargarProd } from "./Producto/CargarProd";
import { NavBar } from "./Nav/NavBar";
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
  return (
    <>
      <div className="app-container">
        <header className="mb-5">
          <NavBar />
        </header>
        <main className="container" style={{ paddingTop: "80px" }}>
          <CargarProd productos={productos} />
        </main>
        <footer className="text-center">
          <p>
            © 2025 Tienda de Ropa creada por Alejandro Rodríguez Alonso. Todos
            los derechos reservados.
          </p>
        </footer>
      </div>
    </>
  );
};
