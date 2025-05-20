import { useEffect, useState } from "react";
import {
  findAll,
  findNombreAsc,
  findNombreDesc,
  findPrecioAsc,
  findPrecioDesc,
  findByCategoria,
  findByTalla,
} from "../services/ProductoService";
import { CargarProd } from "./Producto/CargarProd";
import { NavBar } from "./nav/Navbar";
export const TiendaRopaApp = () => {
  const [productos, setProductos] = useState([]);
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
  //Con este useEffect me va servir para comprobar si el usuario es admin o no
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  //Funcion para cerrar sesion (la hice aqui ya que aqui es la pagina principal y me parecia lo mas correcto)
  //Lo que está haciendo es quitarle el token que se genera al iniciar sesion y por lo tanto
  //destruir la sesion del usuario cambiando el estado de isLogged a false
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    setIsLogged(false);
  };
  //Con este metodo lo que hago es llamar al back  una serie de funciones de filtrado y además por defecto
  // dejo que carguen todos los productos si no se selecciona nada
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
  const getProductosPorTalla = async (tallaId) => {
    let result;
    if (tallaId === "todos") {
      result = await findAll();
    } else {
      result = await findByTalla(tallaId);
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
            onFiltrarTalla={getProductosPorTalla}
            isLogged={isLogged}
            isAdmin={isAdmin}
            onLogout={handleLogout}
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
