import { Link } from "react-router-dom";
import { FiltroBusqueda } from "./FiltroBusqueda";
import { FiltroOrdenar } from "./FiltroOrdenar";
import { FiltroTalla } from "./FiltroTalla";
import { FiltroCategoria } from "./FiltroCategoria";

export const NavBar = ({
  onFiltrar,
  onFiltrarCategoria,
  onFiltrarTalla,
  onBuscar,
  isLogged,
  onLogout,
}) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom w-100 bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
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
            <FiltroBusqueda onBuscar={onBuscar} />
            <FiltroOrdenar onFiltrar={onFiltrar} />
            <FiltroTalla onFiltrarTalla={onFiltrarTalla} />
            <FiltroCategoria onFiltrarCategoria={onFiltrarCategoria} />
            <ul className="navbar-nav align-items-center flex-column gap-2 mt-3">
              {!isLogged ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-outline-light btn-sm w-100"
                      to="/usuario/registro"
                    >
                      Registrate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-outline-light btn-sm w-100"
                      to="/login"
                    >
                      Iniciar sesión
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-outline-danger btn-sm w-100"
                    onClick={onLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              )}
              <li className="nav-item">
                <a
                  className="nav-link btn btn-outline-warning btn-sm w-100"
                  href="/html/gestionAdministrador.html"
                >
                  ADMIN
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-sm d-flex align-items-center justify-content-center w-100"
                  href="#"
                >
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
          <div className="d-flex align-items-stretch w-100 gap-2">
            {/* Filtros en un div con ancho máximo y shrink */}
            <div
              className="d-flex align-items-stretch gap-2 flex-grow-1 flex-shrink-1"
              style={{ maxWidth: "65%" }}
            >
              <FiltroBusqueda onBuscar={onBuscar} />
              <FiltroOrdenar onFiltrar={onFiltrar} />
              <FiltroTalla onFiltrarTalla={onFiltrarTalla} />
              <FiltroCategoria onFiltrarCategoria={onFiltrarCategoria} />
            </div>
            {/* Botones en un div aparte, no se encogen */}
            <div className="d-flex align-items-stretch gap-2 flex-shrink-0">
              {!isLogged ? (
                <>
                  <Link
                    className="nav-link btn btn-sm btn-morado-navbar"
                    to="/usuario/registro"
                  >
                    Registrate
                  </Link>
                  <Link
                    className="nav-link btn btn-sm btn-morado-navbar"
                    to="/login"
                  >
                    Iniciar sesión
                  </Link>
                </>
              ) : (
                <button
                  className="nav-link btn btn-sm btn-morado-navbar"
                  onClick={onLogout}
                >
                  Cerrar sesión
                </button>
              )}
              <a
                className="nav-link btn btn-sm btn-morado-navbar"
                href="/html/gestionAdministrador.html"
              >
                ADMIN
              </a>
              <a
                className="nav-link btn btn-sm d-flex align-items-center justify-content-center btn-morado-navbar"
                href="#"
              >
                <i className="bi bi-cart" id="iconoCarro"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
