import { useNavigate } from "react-router-dom";
import { login } from "../../services/RegisterAndLogin";
import { LoginForm } from "./LoginForm";
import { jwtDecode } from "jwt-decode";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handlerLogin = async (form) => {
    const response = await login(form.userName, form.password);
    if (response && response.status === 200) {
      localStorage.setItem("token", response.data.token || "true");
      localStorage.setItem("userId", response.data.id || "");

      // Decodifica el token y guarda los roles
      try {
        const tokenDecodificado = jwtDecode(response.data.token);
        // console.log("Token decodificado:", tokenDecodificado);
        let authorities = tokenDecodificado.authorities;
        if (typeof authorities === "string") {
          authorities = JSON.parse(authorities.replace(/'/g, '"'));
        }
        const roles = Array.isArray(authorities)
          ? authorities.map((auth) => auth.authority)
          : [];
        console.log("Roles extraídos:", roles);
        localStorage.setItem("roles", JSON.stringify(roles));
      } catch (e) {
        localStorage.setItem("roles", "[]");
      }

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
