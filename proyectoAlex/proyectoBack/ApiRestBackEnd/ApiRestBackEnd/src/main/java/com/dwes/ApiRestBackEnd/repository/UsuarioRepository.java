package com.dwes.ApiRestBackEnd.repository;

import com.dwes.ApiRestBackEnd.dto.UsuarioRequestDTO;
import com.dwes.ApiRestBackEnd.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    List<Usuario>findAll();
    Usuario save(Usuario usuario);

    //consultas personalizadas a la base de datos
    @Query("SELECT u FROM Usuario u WHERE u.nombre=?1")
    List<Usuario> buscarPorNombre(String nombre);

    @Query("SELECT u FROM Usuario u WHERE u.email=?1")
    List<Usuario> buscarPorCorreo(String email);

    @Query("SELECT new com.dwes.ApiRestBackEnd.dto.UsuarioRequestDTO(u.email, u.userName, u.password) FROM Usuario u")
    List<UsuarioRequestDTO> obtenerCorreoYPasswd();
}
