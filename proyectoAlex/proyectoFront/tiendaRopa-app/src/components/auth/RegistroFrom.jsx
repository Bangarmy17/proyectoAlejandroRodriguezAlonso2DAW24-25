import { useEffect, useState } from "react";

const initialDataForm = {
  nombre: "",
  apellidos: "",
  email: "",
  direccion: "",
  userName: "",
  password: "",
};

export const RegistroFrom = ({ handlerAdd }) => {
  const [form, setForm] = useState(initialDataForm);
  const { nombre, apellidos, email, direccion, userName, password } = form;
  useEffect(() => {
    setForm(initialDataForm);
  }, []);

  return (
    <div className="form-container form-container-registro">
      <h2 className="text-center">Registro de Usuario</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !nombre ||
            !apellidos ||
            !email ||
            !direccion ||
            !userName ||
            !password
          ) {
            alert("Debe rellenar todos los campos del formulario");
            return;
          }
          handlerAdd(form);
          setForm(initialDataForm);
        }}
      >
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              className="form-control"
              id="nombre"
              placeholder="Nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(event) =>
                setForm({ ...form, nombre: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="apellidos" className="form-label">
              Apellidos
            </label>
            <input
              className="form-control"
              id="apellidos"
              placeholder="Apellidos"
              name="apellidos"
              type="text"
              value={apellidos}
              onChange={(event) =>
                setForm({ ...form, apellidos: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              className="form-control"
              id="email"
              placeholder="Introduzca un email"
              name="email"
              type="email"
              value={email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="direccion" className="form-label">
              Dirección
            </label>
            <input
              className="form-control"
              id="direccion"
              placeholder="Dirección"
              name="direccion"
              type="text"
              value={direccion}
              onChange={(event) =>
                setForm({ ...form, direccion: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="userName" className="form-label">
              Nombre de usuario
            </label>
            <input
              className="form-control"
              id="userName"
              placeholder="Nombre de usuario"
              type="text"
              name="userName"
              value={userName}
              onChange={(event) =>
                setForm({ ...form, userName: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              className="form-control"
              id="password"
              placeholder="Introduzca una contraseña"
              name="password"
              type="password"
              value={password}
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};
