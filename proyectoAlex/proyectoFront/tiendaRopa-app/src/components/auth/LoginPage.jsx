import { login } from "../../services/RegisterAndLogin";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  const handlerLogin = async (form) => {
    const response = await login(form.userName, form.password);
    if (response && response.status === 200) {
      alert("¡Login correcto!");
      // Si tu backend devuelve un token, guárdalo aquí:
      // localStorage.setItem("token", response.data.token);
      // Redirige si quieres
    } else {
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
