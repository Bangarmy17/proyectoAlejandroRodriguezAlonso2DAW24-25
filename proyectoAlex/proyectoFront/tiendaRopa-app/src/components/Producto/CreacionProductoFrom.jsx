import { useEffect, useState } from "react";
import { findAllCategorias } from "../../services/CategoriaService";
import { findAllTallas } from "../../services/TallaService";

const initialDataForm = {
  nombre: "",
  descripcion: "",
  precio: "",
  stock: "",
  talla: "",
  categoria: "",
  imagen: null,
};

export const CreacionProductoForm = ({ productoSelected, handlerAdd }) => {
  const [form, setForm] = useState(initialDataForm);
  const { id, nombre, descripcion, precio, stock, talla, categoria } = form;
  const [tallas, setTallas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    setForm(productoSelected || initialDataForm);
  }, [productoSelected]);

  // Cargo las tallas y categorias
  useEffect(() => {
    const cargarTallas = async () => {
      const response = await findAllTallas();
      if (response && response.data) setTallas(response.data);
    };
    const cargarCategorias = async () => {
      const response = await findAllCategorias();
      if (response && response.data) setCategorias(response.data);
    };
    cargarTallas();
    cargarCategorias();
  }, []);

  const handleFileChange = (event) => {
    setForm({ ...form, imagen: event.target.files[0] });
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !nombre ||
            !descripcion ||
            !precio ||
            !stock ||
            !talla ||
            !categoria
          ) {
            alert("Debe rellenar todos los campos del formulario");
            return;
          }
          const producto = {
            id,
            nombre,
            descripcion,
            precio: parseFloat(precio),
            stock: parseInt(stock),
            categoria,
            talla,
          };
          handlerAdd(producto);
          setForm(initialDataForm);
          event.target.reset();
        }}
      >
        <div>
          <div className="mt-1 mb-2">
            <input
              placeholder="Nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(event) =>
                setForm({ ...form, nombre: event.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              placeholder="Descripcion"
              name="descripcion"
              type="text"
              value={descripcion}
              onChange={(event) =>
                setForm({ ...form, descripcion: event.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              placeholder="Precio"
              name="precio"
              type="number"
              value={precio}
              onChange={(event) =>
                setForm({ ...form, precio: event.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              placeholder="Stock"
              name="stock"
              type="number"
              value={stock}
              onChange={(event) =>
                setForm({ ...form, stock: event.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <select
              name="talla"
              value={talla}
              onChange={(event) =>
                setForm({ ...form, talla: event.target.value })
              }
              required
            >
              <option value="">Selecciona una talla</option>
              {tallas.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <select
              name="categoria"
              value={categoria}
              onChange={(event) =>
                setForm({ ...form, categoria: event.target.value })
              }
              required
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <input
              type="file"
              name="imagen"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              {form.id > 0 ? "Actualizar" : "Crear"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
