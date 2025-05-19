import { useState } from "react";

export const LoginForm = ({ handlerLogin }) => {
  const [form, setForm] = useState({ userName: "", password: "" });
  const { userName, password } = form;

  return (
    <div className="form-container">
      <h2 className="text-center">Iniciar Sesión</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlerLogin(form);
        }}
      >
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={userName}
            onChange={(e) => setForm({ ...form, userName: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
