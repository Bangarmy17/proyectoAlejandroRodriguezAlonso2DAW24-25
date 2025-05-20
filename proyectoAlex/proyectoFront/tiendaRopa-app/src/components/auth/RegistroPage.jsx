import { useNavigate } from "react-router-dom";
import { register } from "../../services/RegisterAndLogin";
import { RegistroFrom } from "./RegistroFrom";

export const RegistroPage = () => {
  const navigate = useNavigate();

  const handlerAdd = async (form) => {
    const response = await register(
      form.nombre,
      form.apellidos,
      form.email,
      form.direccion,
      form.userName,
      form.password
    );
    if (response && response.status === 201) {
      navigate("/");
    } else {
      alert("Error al registrarse. Inténtalo de nuevo.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <RegistroFrom handlerAdd={handlerAdd} />
      </div>
    </div>
  );
};
