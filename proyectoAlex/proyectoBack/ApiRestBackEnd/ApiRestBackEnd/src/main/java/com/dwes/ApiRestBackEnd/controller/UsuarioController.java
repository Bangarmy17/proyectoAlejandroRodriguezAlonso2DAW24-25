package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.dto.UsuarioFormateadoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.UsuarioFullInfoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.UsuarioRequestDTO;
import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/usuario")
@RestController
public class UsuarioController {
    private UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }
    @GetMapping("/listadoUsuarios")
    public List<UsuarioFormateadoRequestDTO> mostrarTodosUsuarios(){
        return usuarioService.obtenerTodosLosUsuarios();
    }
    @PostMapping("/crearUsuarios")
    public Usuario crearUsuario(Usuario usuario){
        return usuarioService.crearUsuario(usuario);
    }
    @GetMapping("/obtenerUsuarioPorId/{id}")
    public UsuarioFullInfoRequestDTO obtenerUsuarioPorId(@RequestParam long id){
        return usuarioService.mostrarUsuarioPorId(id);
    }
    @GetMapping("/obtenerCorreoPasswdYUsername")
    public List<UsuarioRequestDTO> obtenerCorreoPasswdYUsername(){
        return usuarioService.obtenerCorreoContraYUsername();
    }
    @PutMapping("/modificarPorId/{id}")
    public Usuario modificarUsuarioPorId(Usuario usuario, @RequestParam long id){
        return usuarioService.modificarUsuarioPorId(usuario, id);
    }
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<Void> borrarUsuarioById(@RequestParam long id){
        try{
            usuarioService.borrarUsuarioPorId(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/borrar")
    public ResponseEntity<Void> borrarTodos(){
        try{
            usuarioService.borrarAllUsuarios();
            return ResponseEntity.ok().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
