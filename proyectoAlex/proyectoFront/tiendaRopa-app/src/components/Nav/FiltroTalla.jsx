export const FiltroTalla = ({ onFiltrarTalla }) => {
  const tallas = [
    { id: 1, nombre: "XS" },
    { id: 2, nombre: "S" },
    { id: 3, nombre: "M" },
    { id: 4, nombre: "L" },
    { id: 5, nombre: "XL" },
  ];

  return (
    <div className="dropdown">
      <button
        className="btn btn-sm dropdown-toggle text-white-50"
        type="button"
        id="dropdownMenuTalla"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Talla
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuTalla"
      >
        {tallas.map((talla) => (
          <li key={talla.id}>
            <button
              className="dropdown-item"
              onClick={() => onFiltrarTalla(talla.id)}
            >
              {talla.nombre}
            </button>
          </li>
        ))}
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => onFiltrarTalla("todos")}
          >
            Todas las tallas
          </button>
        </li>
      </ul>
    </div>
  );
};
