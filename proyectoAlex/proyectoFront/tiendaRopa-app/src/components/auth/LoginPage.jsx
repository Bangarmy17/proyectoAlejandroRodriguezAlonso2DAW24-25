import { useNavigate } from "react-router-dom";
import { login } from "../../services/RegisterAndLogin";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handlerLogin = async (form) => {
    // Lo primero que hago es llamar a la funcion de login
    const response = await login(form.userName, form.password);
    // Si la respuesta es correcta, guardo el token en el localStorage
    // y redirijo a la pagina principal
    if (response && response.status === 200) {
      // Guardar el token en el localStorage para mantener la sesión
      localStorage.setItem("token", response.data.token || "true");
      // Y con esto lo que hago es guardar el id del usuario que lo voy a necesitar para el carrito por ejemplo XD
      localStorage.setItem(
        "isAdmin",
        response.data.admin === "true" ? "true" : "false"
      );
      localStorage.setItem("userId", response.data.id || "");
      navigate("/"); // Redirige a la página principal
    } else {
      // Si la respuesta no es correcta, muestro un mensaje de error
      alert("Usuario o contraseña incorrectos");
    }
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <LoginForm handlerLogin={handlerLogin} />
      </div>
    </div>
  );
};
