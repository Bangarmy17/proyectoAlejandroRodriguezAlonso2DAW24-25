import { use } from "react";

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
      <form>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label for="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Por favor introduzca su nombre"
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label for="apellidos" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="apellidos"
              name="apellidos"
              placeholder="Por favor introduzca sus apellidos"
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label for="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Introduzca un email"
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label for="direccion" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              name="direccion"
              placeholder="Dirección"
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label for="userName" className="form-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label for="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};
