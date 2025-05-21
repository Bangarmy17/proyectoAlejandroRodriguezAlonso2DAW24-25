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
}) => {
  // Lee si es admin del localStorage
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  //Me aseguro de cerrar sesión al pulsar el botón (que lo tengo donde muestro la navbar)
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userId");
    window.location.reload();
  };
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
                    className="nav-link btn btn-sm btn-morado-navbar"
                    onClick={onLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              )}
              {/* Solo muestra el botón ADMIN si es admin */}
              {isAdmin && (
                <li className="nav-item">
                  <a
                    className="nav-link btn btn-outline-warning btn-sm w-100"
                    href="/html/gestionAdministrador.html"
                  >
                    ADMIN
                  </a>
                </li>
              )}
              <Link
                className="nav-link btn btn-sm btn-morado-navbar"
                to="/carrito"
              >
                <i className="bi bi-cart" id="iconoCarro"></i>
              </Link>
            </ul>
          </div>
        </div>
        {/* Menú horizontal para escritorio (pantallas grandes) */}
        <div
          className="collapse navbar-collapse d-none d-lg-flex"
          id="navbarSupportedContent"
        >
          <div className="d-flex align-items-stretch w-100 gap-2">
            <div
              className="d-flex align-items-stretch gap-2 flex-grow-1 flex-shrink-1"
              style={{ maxWidth: "65%" }}
            >
              <FiltroBusqueda onBuscar={onBuscar} />
              <FiltroOrdenar onFiltrar={onFiltrar} />
              <FiltroTalla onFiltrarTalla={onFiltrarTalla} />
              <FiltroCategoria onFiltrarCategoria={onFiltrarCategoria} />
            </div>
            {/* Botones en un div aparte*/}
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
              {/* Solo muestra el botón ADMIN si es admin*/}
              {isAdmin && (
                <a
                  className="nav-link btn btn-sm btn-morado-navbar"
                  href="/html/gestionAdministrador.html"
                >
                  ADMIN
                </a>
              )}
              <Link
                className="nav-link btn btn-sm btn-morado-navbar"
                to="/carrito"
              >
                <i className="bi bi-cart" id="iconoCarro"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
