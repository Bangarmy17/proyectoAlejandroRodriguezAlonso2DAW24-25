import axios from "./axiosConfig";
const baseUrl="http://localhost:8080/usuario";

//Peticion GET de un listado de usuarios DTO que me 
// devolverá la informacion personal del usuario
// nombre, apellidos, email y su direccion.
export const listadoUsuarios = async () =>{
    try{
        const response = await axios.get(baseUrl);
        return response;
    } catch(error){
        console.log(error);
    }
    return null;
}

// Esta otra peticion GET me va a 
// devolver los datos de la cuenta de cada usuario
// (userName, password y el email de nuevo)
export const listadoInfoCuentas  = async() =>{
    try{
        const response  =await axios.get(baseUrl + "/obtenerCorreoPasswdYUsername");
        return response;
    } catch(error){
        console.log(error);
    }
    return null;
}

export const borrarUsuarioPorId = async (id) => {
    try {
        const response = await axios.delete(baseUrl + "/borrar/"+id);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

