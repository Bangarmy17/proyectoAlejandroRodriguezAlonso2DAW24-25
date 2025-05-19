import { useEffect, useState } from "react";
import {
  findAll,
  findNombreAsc,
  findNombreDesc,
  findPrecioAsc,
  findPrecioDesc,
  findByCategoria,
} from "../services/ProductoService";
import { CargarProd } from "./Producto/CargarProd";
import { NavBar } from "./nav/Navbar";
export const TiendaRopaApp = () => {
  const [productos, setProductos] = useState([]);
  const getProductos = async (filtro) => {
    let result;
    switch (filtro) {
      case "precioAsc":
        result = await findPrecioAsc();
        break;
      case "precioDes":
        result = await findPrecioDesc();
        break;
      case "nombreAsc":
        result = await findNombreAsc();
        break;
      case "nombreDes":
        result = await findNombreDesc();
        break;
      default:
        result = await findAll();
    }
    if (result && result.data) {
      setProductos(result.data);
    } else {
      setProductos([]);
    }
  };
  const getProductosPorCategoria = async (categoriaId) => {
    let result;
    if (categoriaId === "todos") {
      result = await findAll();
    } else {
      result = await findByCategoria(categoriaId);
    }
    if (result && result.data) {
      setProductos(result.data);
    } else {
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
          <NavBar
            onFiltrar={getProductos}
            onFiltrarCategoria={getProductosPorCategoria}
          />
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
