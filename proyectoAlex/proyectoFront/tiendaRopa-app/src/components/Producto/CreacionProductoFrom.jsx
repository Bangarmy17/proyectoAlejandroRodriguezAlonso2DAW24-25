import { useEffect, useState } from "react";
import { findAllCategorias } from "../../services/CategoriaService";
import { findAllTallas } from "../../services/TallaService";

const initialDataForm = {
  id: 0,
  nombre: "",
  descripcion: "",
  precio: "",
  stock: "",
  tallaId: "",
  categoriaId: "",
  nombreImagen: "",
};

export const CreacionProductoForm = ({ productoSelected, handlerAdd }) => {
  const [form, setForm] = useState(initialDataForm);
  const {
    id,
    nombre,
    descripcion,
    precio,
    stock,
    tallaId,
    categoriaId,
    nombreImagen,
  } = form;
  const [tallas, setTallas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (productoSelected && productoSelected.id > 0) {
      setForm({
        id: productoSelected.id,
        nombre: productoSelected.nombre || "",
        descripcion: productoSelected.descripcion || "",
        precio: productoSelected.precio || "",
        stock: productoSelected.stock || "",
        categoriaId:
          productoSelected.categoria?.id || productoSelected.idCategoria || "",
        tallaId: productoSelected.talla?.id || productoSelected.idTalla || "",
        nombreImagen: productoSelected.rutaImagen?.split("/").pop() || "",
      });
    } else {
      setForm(initialDataForm);
    }
  }, [productoSelected]);

  useEffect(() => {
    const cargarDependencias = async () => {
      try {
        const [tallasRes, categoriasRes] = await Promise.all([
          findAllTallas(),
          findAllCategorias(),
        ]);
        if (tallasRes?.data) setTallas(tallasRes.data);
        if (categoriasRes?.data) setCategorias(categoriasRes.data);
      } catch (error) {
        console.error("Error al cargar tallas o categorías:", error);
      }
    };
    cargarDependencias();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      nombreImagen: event.target.files?.[0]?.name || "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !nombre ||
      !descripcion ||
      !precio ||
      !stock ||
      !tallaId ||
      !categoriaId
    ) {
      alert("Debe rellenar todos los campos obligatorios del formulario.");
      return;
    }
    const productoParaEnviar = {
      ...(id > 0 && { id }),
      nombre,
      descripcion,
      precio: parseFloat(precio),
      stock: parseInt(stock),
      idCategoria: parseInt(categoriaId),
      idTalla: parseInt(tallaId),
      rutaImagen: nombreImagen ? `/images/${nombreImagen}` : null,
    };
    handlerAdd(productoParaEnviar);
    setForm(initialDataForm);
    event.target.reset(); //resetea los campos
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 p-md-4 rounded admin-form-bg shadow"
    >
      <div className="mb-3">
        <label htmlFor="nombreProducto" className="form-label form-label-sm">
          Nombre
        </label>
        <input
          type="text"
          className="form-control form-control-sm admin-form-input"
          id="nombreProducto"
          placeholder="Nombre del producto"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="descripcionProducto"
          className="form-label form-label-sm"
        >
          Descripción
        </label>
        <textarea
          className="form-control form-control-sm admin-form-input"
          id="descripcionProducto"
          placeholder="Descripción detallada"
          name="descripcion"
          value={descripcion}
          onChange={handleInputChange}
          rows="3"
          required
        ></textarea>
      </div>
      <div className="row gx-2">
        <div className="col-md-6 mb-3">
          <label htmlFor="precioProducto" className="form-label form-label-sm">
            Precio (€)
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control form-control-sm admin-form-input"
            id="precioProducto"
            placeholder="0.00"
            name="precio"
            value={precio}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="stockProducto" className="form-label form-label-sm">
            Stock
          </label>
          <input
            type="number"
            className="form-control form-control-sm admin-form-input"
            id="stockProducto"
            placeholder="0"
            name="stock"
            value={stock}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="row gx-2">
        <div className="col-md-6 mb-3">
          <label htmlFor="tallaProducto" className="form-label form-label-sm">
            Talla
          </label>
          <select
            className="form-select form-select-sm admin-form-input"
            id="tallaProducto"
            name="tallaId"
            value={tallaId}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccionar...</option>
            {tallas.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label
            htmlFor="categoriaProducto"
            className="form-label form-label-sm"
          >
            Categoría
          </label>
          <select
            className="form-select form-select-sm admin-form-input"
            id="categoriaProducto"
            name="categoriaId"
            value={categoriaId}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccionar...</option>
            {categorias.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="imagenFileProducto"
          className="form-label form-label-sm"
        >
          Imagen (nombre de archivo)
        </label>
        <input
          type="file"
          className="form-control form-control-sm admin-form-input"
          id="imagenFileProducto"
          name="imagenFile"
          accept="image/*"
          onChange={handleFileChange}
        />
        {nombreImagen && (
          <small className="d-block mt-1 text-white-50">
            Seleccionado: {nombreImagen}
          </small>
        )}
      </div>
      <button className="btn btn-custom-primary w-100" type="submit">
        <i
          className={`bi bi-${
            id > 0 ? "pencil-square" : "plus-circle-fill"
          } me-2`}
        ></i>
        {id > 0 ? "Actualizar Producto" : "Crear Producto"}
      </button>
    </form>
  );
};
