import { useEffect, useState } from "react";

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
  const { nombre, descripcion, precio, stock, talla, categoria } = form;

  useEffect(() => {
    setForm(productoSelected || initialDataForm);
  }, [productoSelected]);

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
          const formData = new FormData();
          formData.append("nombre", nombre);
          formData.append("descripcion", descripcion);
          formData.append("precio", precio);
          formData.append("stock", stock);
          formData.append("talla", talla);
          formData.append("categoria", categoria);
          formData.append("imagen", form.imagen);
          handlerAdd(formData);
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
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
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
              <option value="camiseta">Camiseta</option>
              <option value="pantalon">Pantalon</option>
              <option value="calcetin">Calcetines</option>
              <option value="gorro">Gorro</option>
              <option value="sudadera">Sudadera</option>
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
