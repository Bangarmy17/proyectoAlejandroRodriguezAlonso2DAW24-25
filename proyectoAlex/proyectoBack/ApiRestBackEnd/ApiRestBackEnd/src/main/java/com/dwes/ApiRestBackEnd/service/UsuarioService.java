package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.dto.UsuarioFormateadoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.UsuarioFullInfoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.UsuarioRequestDTO;
import com.dwes.ApiRestBackEnd.model.Role;
import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.repository.RoleRepository;
import com.dwes.ApiRestBackEnd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder ){
        this.usuarioRepository = usuarioRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }
    public UsuarioRequestDTO mapToRequestDTO(Usuario usuario){
        return UsuarioRequestDTO.builder()
                .id(usuario.getId())
                .email(usuario.getEmail())
                .userName(usuario.getUserName())
                .password(usuario.getPassword())
                .build();
    }
    public UsuarioFormateadoRequestDTO mapToRequestDTOFormateado(Usuario usuario){
        return UsuarioFormateadoRequestDTO.builder()
                .nombre(usuario.getNombre())
                .apellidos(usuario.getApellidos())
                .direccion(usuario.getDireccion())
                .email(usuario.getEmail())
                .build();
    }
    public UsuarioFullInfoRequestDTO mapToRequestDTOFullInfo(Usuario usuario){
        return UsuarioFullInfoRequestDTO.builder()
                .nombre(usuario.getNombre())
                .apellidos(usuario.getApellidos())
                .email(usuario.getEmail())
                .direccion(usuario.getDireccion())
                .userName(usuario.getUserName())
                .password(usuario.getPassword())
                .build();
    }
    //<----------------Metodos que el usuario va a utilizar mediante formularios en el frontend------------------>
    //creacion de un usuario
    @Transactional
    public Usuario crearUsuario(Usuario usuario){
        //Cualquier Usuario que se registre deberia tener el rol ROLE_USER
        //asi que le asigno el rol
        Optional<Role> optionalRoleUsuario = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();
        if(optionalRoleUsuario.isPresent())
            roles.add(optionalRoleUsuario.get());
        //Si un usuario es administrador le asgino el ROLE_ADMIN
        if (usuario.isAdmin()){
            Optional<Role> optionalRoleAdmin = roleRepository.findByName("ROLE_ADMIN");
            if(optionalRoleAdmin.isPresent())
                roles.add(optionalRoleAdmin.get());
        }
        //guardar los roles en el usuario
        usuario.setRoles(roles);
        //asignar el password encriptado
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        return usuarioRepository.save(usuario);
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
    //<--------------------Métodos que el administrador usará---------------------->
    //con la funcion findAll puedo mostrar todos los usuarios
    @Transactional(readOnly = true)
    public List<Usuario> obtUsuarios(){
        return usuarioRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<UsuarioFormateadoRequestDTO> obtenerTodosLosUsuarios(){
        List<Usuario> usuarioList = usuarioRepository.findAll();
        return usuarioList.stream().map(this::mapToRequestDTOFormateado).collect(Collectors.toList());
    }
    //Obtencion de un usuario usando el id como parametro llamando a una funcion de JPA repository
    @Transactional(readOnly = true)
    public UsuarioFullInfoRequestDTO mostrarUsuarioPorId(long id){
        Usuario usuario = usuarioRepository.findById(id).get();
        return mapToRequestDTOFullInfo(usuario);
    }
    @Transactional(readOnly = true)
    public List<UsuarioRequestDTO> obtenerCorreoContraYUsername(){
        List<UsuarioRequestDTO> lista = usuarioRepository.obtenerCorreoYPasswd();
        return lista;
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
    //Borrar todos los usuarios
    @Transactional
    public void borrarAllUsuarios(){
        usuarioRepository.deleteAll();
    }
    //obetener usuarios sin dto
    @Transactional(readOnly = true)
    public List<Usuario> mostrarUsuarios(){
        List<Usuario> listaUsuarios = usuarioRepository.findAll();
        return listaUsuarios;
    }
}
