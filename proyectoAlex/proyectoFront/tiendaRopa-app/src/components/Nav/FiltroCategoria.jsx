export const FiltroCategoria = ({ onFiltrarCategoria }) => {
  const categorias = [
    { id: 1, nombre: "Pantalones" },
    { id: 2, nombre: "Camisetas" },
    { id: 3, nombre: "Sudaderas" },
    { id: 4, nombre: "Calcetines" },
    { id: 5, nombre: "Gorros" },
  ];
  return (
    <div className="dropdown">
      <button
        className="btn btn-sm dropdown-toggle text-white-50"
        type="button"
        id="dropdownMenuCategoria"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categoría
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuCategoria"
      >
        {categorias.map((cat) => (
          <li key={cat.id}>
            <button
              className="dropdown-item"
              onClick={() => onFiltrarCategoria(cat.id)}
            >
              {cat.nombre}
            </button>
          </li>
        ))}
        <li>
          <hr className="dropdown-divider" />
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
  );
};
