import { useEffect, useState } from "react";

const initialDataForm = {
  nombre: "",
  descripcion: "",
  precio: "",
  stock: "",
};

export const CreacionProductoForm = ({ productoSelected, handlerAdd }) => {
  const [form, setForm] = useState(initialDataForm);
  const { nombre, descripcion, precio, stock } = form;

  useEffect(() => {
    setForm(productoSelected);
  }, [productoSelected]);

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!nombre || !descripcion || !precio || !stock) {
            alert("Debe rellenar todos los campos del formulario");
            return;
          }
          handlerAdd(form);
          setForm(initialDataForm);
        }}
      >
        <div className="form-control my-3 w-25">
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
        <div className="form-control my-3 w-25">
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
        <div className="form-control my-3 w-25">
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
        <div className="form-control my-3 w-25">
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
        <div>
          <button className="btn btn-primary" type="submit">
            {form.id > 0 ? "Actualizar" : "Crear"}
          </button>
        </div>
      </form>
    </div>
  );
};
