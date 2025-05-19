import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ({
  onFiltrar,
  onFiltrarCategoria,
  isLogged,
  onLogout,
}) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom w-100 bg-dark">
      <div className="container">
        <a className="navbar-brand" href="">
          <img
            src="img/iconoTienda.png"
            className="img-fluid"
            id="iconoTienda"
            alt="Logo"
          />
        </a>
        {/* Botón hamburguesa para offcanvas en móvil/tablet */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menú lateral Offcanvas para móvil/tablet */}
        <div
          className="offcanvas offcanvas-start d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <form className="d-flex mb-3" style={{ maxWidth: 300 }}>
              <input
                className="form-control me-3"
                type="search"
                placeholder="Buscar productos"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-3" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            <div className="dropdown mb-3">
              <button
                className="btn dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ordenar por
              </button>
              <ul className="dropdown-menu w-100">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrar("precioAsc")}
                  >
                    Precio: Menor a Mayor
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrar("precioDes")}
                  >
                    Precio: Mayor a Menor
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrar("nombreAsc")}
                  >
                    Nombre: A-Z
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrar("nombreDes")}
                  >
                    Nombre: Z-A
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown mb-3">
              <button
                className="btn dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categoría
              </button>
              <ul className="dropdown-menu w-100">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrarCategoria(1)}
                  >
                    Pantalones
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrarCategoria(2)}
                  >
                    Camisetas
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrarCategoria(3)}
                  >
                    Sudaderas
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrarCategoria(4)}
                  >
                    Calcetines
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrarCategoria(5)}
                  >
                    Gorros
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onFiltrarCategoria("todos")}
                  >
                    Todas las categorías
                  </button>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav align-items-center">
              {!isLogged ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-outline-light w-100"
                      to="/usuario/registro"
                    >
                      Registrate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-outline-light w-100"
                      to="/login"
                    >
                      Iniciar sesión
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-outline-danger w-100"
                    onClick={onLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-cart" id="iconoCarro"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Menú horizontal para escritorio (pantallas grandes) */}
        <div
          className="collapse navbar-collapse d-none d-lg-flex"
          id="navbarSupportedContent"
        >
          <form className="d-flex ms-1" style={{ flexGrow: 1, maxWidth: 300 }}>
            <input
              className="form-control me-3"
              type="search"
              placeholder="Buscar productos"
              aria-label="Search"
            />
            <button className="btn btn-outline-success me-3" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <div className="dropdown me-3">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ordenar por
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrar("precioAsc")}
                >
                  Precio: Menor a Mayor
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrar("precioDes")}
                >
                  Precio: Mayor a Menor
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrar("nombreAsc")}
                >
                  Nombre: A-Z
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrar("nombreDes")}
                >
                  Nombre: Z-A
                </button>
              </li>
            </ul>
          </div>
          <div className="dropdown me-3">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categoría
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrarCategoria(1)}
                >
                  Pantalones
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrarCategoria(2)}
                >
                  Camisetas
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrarCategoria(3)}
                >
                  Sudaderas
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrarCategoria(4)}
                >
                  Calcetines
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrarCategoria(5)}
                >
                  Gorros
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => onFiltrarCategoria("todos")}
                >
                  Todas las categorías
                </button>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto align-items-center">
            {!isLogged ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-outline-light w-100"
                    to="/usuario/registro"
                  >
                    Registrate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-outline-light w-100"
                    to="/login"
                  >
                    Iniciar sesión
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-outline-danger w-100"
                  onClick={onLogout}
                >
                  Cerrar sesión
                </button>
              </li>
            )}
            <li className="nav-item me-3">
              <a className="nav-link" href="/html/gestionAdministrador.html">
                ADMIN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-cart" id="iconoCarro"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
