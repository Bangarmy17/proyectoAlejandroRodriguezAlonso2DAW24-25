package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.dto.UsuarioFormateadoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.UsuarioFullInfoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.UsuarioRequestDTO;
import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/usuario")
@RestController
public class UsuarioController {
    private UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }
    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), "El campo " + err.getField() + " " + err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }
    @GetMapping()
    public List<Usuario> obtUsuarios(){
        return usuarioService.obtUsuarios();
    }
    /*@GetMapping()
    public List<UsuarioFormateadoRequestDTO> mostrarTodosUsuarios(){
        return usuarioService.obtenerTodosLosUsuarios();
    }*/
    //este get es de pruebas mias personales
    @GetMapping("/listadoUsuariosSinDTO")
    public List<Usuario> mostrarUsuarios(){
        return usuarioService.mostrarUsuarios();
    }
    //metodo de creacion de un usuario que podria ser admin
    @PostMapping()
    public ResponseEntity<?> crearUsuario(@Valid @RequestBody Usuario usuario, BindingResult result) {
        if (result.hasErrors()) {
            return validation(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.crearUsuario(usuario));

    }
    @PostMapping("/registro")
    public ResponseEntity<?> registrarUsuario(@Valid @RequestBody Usuario usuario, BindingResult result) {
      usuario.setAdmin(false);
      usuario.setEnabled(true);
      return crearUsuario(usuario, result);
    }
    @GetMapping("/obtenerUsuarioPorId/{id}")
    public UsuarioFullInfoRequestDTO obtenerUsuarioPorId(@PathVariable long id){
        return usuarioService.mostrarUsuarioPorId(id);
    }
    @GetMapping("/obtenerCorreoPasswdYUsername")
    public List<UsuarioRequestDTO> obtenerCorreoPasswdYUsername(){
        return usuarioService.obtenerCorreoContraYUsername();
    }
    @PutMapping("/modificarPorId/{id}")
    public Usuario modificarUsuarioPorId(@RequestBody Usuario usuario, @PathVariable long id){
        return usuarioService.modificarUsuarioPorId(usuario, id);
    }
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<Void> borrarUsuarioById(@PathVariable long id){
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
