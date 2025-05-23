import axios from "./axiosConfig";

const base_url="http://localhost:8080";
// Peticion POST que se encarga de registrar al usuario
export const register = async (nombre,apellidos,email,direccion,userName,password) => {
    try{
const response = await axios.post(base_url + "/usuario/registro", 
        {nombre:nombre, apellidos:apellidos, email:email, direccion:direccion, userName:userName, password:password});
    return response;
    } catch (error) {
        console.log("Error en la peticion POST: "+error);
    }
    return undefined;
}
// peticion POST que se encarga de iniciar sesion mediante el usuario y la contraseña
//y la contraseña genera un token que se almacena en el localStorage
export const login = async (userName, password) => {
  try {
    const response = await axios.post(base_url + "/login", {
      userName,
      password,
    });
    return response;
  } catch (error) {
    console.log("Error en la petición POST: " + error);
    return undefined;
  }
};