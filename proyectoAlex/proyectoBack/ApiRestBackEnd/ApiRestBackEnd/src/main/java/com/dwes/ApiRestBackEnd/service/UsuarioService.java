package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.dto.UsuarioRequestDTO;
import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }
    public UsuarioRequestDTO mapToRequestDTO(Usuario usuario){
        return UsuarioRequestDTO.builder()
                .email(usuario.getEmail())
                .userName(usuario.getUserName())
                .password(usuario.getPassword())
                .build();
    }
    //con la funcion findAll puedo mostrar todos los usuarios
    @Transactional(readOnly = true)
    public List<Usuario> obtenerTodosLosUsuarios(){
        List<Usuario> usuarioList = usuarioRepository.findAll();
        return usuarioList;
    }
    //creacion de un usuario
    @Transactional
    public Usuario crearUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
    //Obtencion de un usuario usando el id como parametro llamando a una funcion de JPA repository
    @Transactional(readOnly = true)
    public Usuario mostrarUsuarioPorId(long id){
        return usuarioRepository.findById(id).get();
    }
    @Transactional(readOnly = true)
    public List<UsuarioRequestDTO> obtenerCorreoContraYUsername(){
        List<UsuarioRequestDTO> lista = usuarioRepository.obtenerCorreoYPasswd();
        return lista;
    }

    //modificar campos del usuario
    @Transactional
    public Usuario modificarUsuarioPorId(Usuario usuario, long id){
    Usuario usuarioNuevo = usuarioRepository.findById(id).get();
    if (Objects.nonNull(usuario.getNombre()) && !"".equalsIgnoreCase(usuario.getNombre())){
        usuarioNuevo.setNombre(usuario.getNombre());
    }
    if (Objects.nonNull(usuario.getApellidos()) && !"".equalsIgnoreCase(usuario.getApellidos())){
        usuarioNuevo.setApellidos(usuario.getApellidos());
    }
    if (Objects.nonNull(usuario.getEmail()) && !"".equalsIgnoreCase(usuario.getEmail())){
        usuarioNuevo.setEmail(usuario.getEmail());
    }
    if (Objects.nonNull(usuario.getDireccion()) && !"".equalsIgnoreCase(usuario.getDireccion())){
        usuarioNuevo.setDireccion(usuario.getDireccion());
    }
    if (Objects.nonNull(usuario.getUserName()) && !"".equalsIgnoreCase(usuario.getUserName())){
        usuarioNuevo.setUserName(usuario.getUserName());
    }
    if (Objects.nonNull(usuario.getPassword()) && !"".equalsIgnoreCase(usuario.getPassword())){
        usuarioNuevo.setPassword(usuario.getPassword());
    }
    return usuarioRepository.save(usuarioNuevo);
    }
    //borrar usuarios por id
    @Transactional
    public void borrarUsuarioPorId(long id){
        Optional<Usuario> usuario = usuarioRepository.findById(id); //busco al usuario por su id
        if(!usuario.isPresent()){
            throw new RuntimeException("ERROR el no existe un usuario con ese ID"); //en caso que la id pasada por parametro
        } //no exista lo que hago es lanzar una excepcion
        usuarioRepository.deleteById(id);
    }
}
