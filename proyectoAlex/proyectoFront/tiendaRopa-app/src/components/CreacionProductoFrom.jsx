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
      <div>
        <input
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={(event) => setForm({ ...form, nombre: event.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Descripcion"
          name="descripcion"
          value={descripcion}
          onChange={(event) =>
            setForm({ ...form, descripcion: event.target.value })
          }
        />
      </div>
      <div>
        <input
          placeholder="Precio"
          name="precio"
          value={precio}
          onChange={(event) => setForm({ ...form, precio: event.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Stock"
          name="stock"
          value={stock}
          onChange={(event) => setForm({ ...form, stock: event.target.value })}
        />
      </div>
      <div>
        <button type="submit">Guardar producto</button>
      </div>
    </form>
  );
};
