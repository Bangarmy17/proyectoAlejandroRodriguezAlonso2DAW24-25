import { useNavigate } from "react-router-dom";
import { login } from "../../services/RegisterAndLogin";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handlerLogin = async (form) => {
    const response = await login(form.userName, form.password);
    if (response && response.status === 200) {
      localStorage.setItem("token", response.data.token || "true");
      navigate("/");
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
