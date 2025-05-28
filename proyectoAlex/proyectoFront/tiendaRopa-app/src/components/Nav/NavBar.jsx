import { Link, useNavigate } from "react-router-dom";
import { FiltroBusqueda } from "./FiltroBusqueda";
import { FiltroOrdenar } from "./FiltroOrdenar";
import { FiltroTalla } from "./FiltroTalla";
import { FiltroCategoria } from "./FiltroCategoria";

export const NavBar = ({
  onFiltrar, //filtros de precio y alfabeticamente
  onFiltrarCategoria, //filtro de categorías
  onFiltrarTalla, //filtro de tallas
  onBuscar, //filtro de búsqueda aun no implementado
  isLogged, //estado de si el usuario está logueado o no
}) => {
  const navigate = useNavigate(); //no se si lo comenté en otro lado pero sirve para redirigir a otras rutas
  const roles = JSON.parse(localStorage.getItem("roles") || "[]"); // Obtiene los roles del usuario desde el localStorage
  const isAdmin = roles.includes("ROLE_ADMIN"); // Verifica si el usuario es administrador

  // Función para manejar el cierre de sesión
  const onLogout = () => {
    //Asi resumido se eliminan los datos del localStorage para asegurarme el cierre de sesión
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("roles");
    // Redirige al home y fuerza el refresco
    navigate("/");
    window.location.reload();
  };

  // Con offcanvas (propiedad de Bootstrap) me hace la vida más fácil para el menú responsive
  const offcanvasContent = (
    <>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Menú
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column">
        <div className="mb-3">
          <FiltroBusqueda onBuscar={onBuscar} />
        </div>
        <div className="mb-3">
          <FiltroOrdenar onFiltrar={onFiltrar} />
        </div>
        <div className="mb-3">
          <FiltroTalla onFiltrarTalla={onFiltrarTalla} />
        </div>
        <div className="mb-3">
          <FiltroCategoria onFiltrarCategoria={onFiltrarCategoria} />
        </div>
        <ul className="navbar-nav mt-auto pt-3 border-top border-secondary">
          {!isLogged ? (
            <>
              <li className="nav-item mb-2">
                <Link
                  className="btn btn-outline-light w-100"
                  to="/usuario/registro"
                  data-bs-dismiss="offcanvas"
                >
                  Regístrate
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-custom-primary w-100"
                  to="/login"
                  data-bs-dismiss="offcanvas"
                >
                  Iniciar sesión
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item mb-2">
                <Link
                  className="btn btn-info w-100"
                  to="/perfil"
                  data-bs-dismiss="offcanvas"
                >
                  <i className="bi bi-person-circle me-2"></i>Mi Perfil
                </Link>
              </li>
              <li className="nav-item mb-2">
                <button
                  className="btn btn-custom-primary w-100"
                  onClick={onLogout}
                  data-bs-dismiss="offcanvas"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          )}
          {isAdmin && (
            <li className="nav-item my-2">
              <button
                className="btn btn-warning w-100"
                onClick={() => {
                  navigate("/admin");
                  document
                    .querySelector('[data-bs-dismiss="offcanvas"]')
                    .click();
                }}
              >
                PANEL ADMIN
              </button>
            </li>
          )}
          <li className="nav-item">
            <Link
              className="btn btn-outline-light w-100"
              to="/carrito"
              data-bs-dismiss="offcanvas"
            >
              <i className="bi bi-cart-fill me-2"></i>Mi Carrito
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar-bg shadow-sm"
      style={{
        backgroundColor: "#212529",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* Enlace a la página de inicio */}
          <img
            src="/img/iconoTienda.png"
            alt="Logo Tienda"
            style={{ height: "40px" }}
          />
        </Link>
        {/* Botón Hamburguesa para Offcanvas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-search-filter-container mx-auto">
            <FiltroBusqueda onBuscar={onBuscar} />
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <FiltroOrdenar onFiltrar={onFiltrar} />
            </li>
            <li className="nav-item">
              <FiltroTalla onFiltrarTalla={onFiltrarTalla} />
            </li>
            <li className="nav-item">
              <FiltroCategoria onFiltrarCategoria={onFiltrarCategoria} />
            </li>
            <li className="nav-item d-none d-lg-block">
              <div className="vr mx-2 custom-vr"></div>
            </li>
            {!isLogged ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/usuario/registro">
                    Regístrate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-sm btn-custom-primary px-3"
                    to="/login"
                  >
                    Iniciar sesión
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* Usuario Logueado en Navbar Escritorio */}
                <li className="nav-item">
                  {/* Icono de Perfil */}
                  <Link className="nav-link p-1" to="/perfil" title="Mi Perfil">
                    <i className="bi bi-person-circle fs-4 text-white"></i>
                  </Link>
                </li>
                <li className="nav-item ms-lg-2">
                  <button
                    className="btn btn-sm btn-custom-primary px-3"
                    onClick={onLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
            {isAdmin && (
              <li className="nav-item ms-lg-2">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => navigate("/admin")}
                  title="Panel de Administración"
                >
                  ADMIN
                </button>
              </li>
            )}
            <li className="nav-item ms-lg-2">
              <Link className="nav-link p-1" to="/carrito" title="Mi Carrito">
                <i className="bi bi-cart-fill fs-4 text-white"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="offcanvas offcanvas-start d-lg-none" // Solo visible en pantallas pequeñas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ backgroundColor: "#212529", color: "white" }} // Estilo del offcanvas
        >
          {offcanvasContent}
        </div>
      </div>
    </nav>
  );
};
