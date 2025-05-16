import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom w-100">
      <div className="container">
        <a className="navbar-brand" href="">
          <img
            src="img/iconoTienda.png"
            className="img-fluid"
            id="iconoTienda"
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-collapse">
          <form
            className="d-flex mx-auto"
            style={{ flexGrow: 1, maxWidth: 600 }}
          >
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
                <button className="dropdown-item">Precio: Menor a Mayor</button>
              </li>
              <li>
                <button className="dropdown-item">Precio: Mayor a Menor</button>
              </li>
              <li>
                <button className="dropdown-item">Nombre: A-Z</button>
              </li>
              <li>
                <button className="dropdown-item">Nombre: Z-A</button>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-3">
              <a className="nav-link" href="/html/registro.html">
                Registrate
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="/html/login.html">
                Iniciar sesión
              </a>
            </li>
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
