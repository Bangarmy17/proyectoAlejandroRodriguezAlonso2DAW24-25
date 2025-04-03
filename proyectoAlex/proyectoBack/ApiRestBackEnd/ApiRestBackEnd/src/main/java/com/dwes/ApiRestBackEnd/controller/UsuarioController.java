package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Usuario> mostrarTodosUsuarios(){
        return usuarioService.obtenerTodosLosUsuarios();
    }
    @PostMapping("/crearUsuarios")
    public Usuario crearUsuario(Usuario usuario){
        return usuarioService.crearUsuario(usuario);
    }
    @GetMapping("/obtenerUsuarioPorId/{id}")
    public Usuario obtenerUsuarioPorId(@RequestParam long id){
        return usuarioService.mostrarUsuarioPorId(id);
    }
    @PostMapping("/modificarPorId/{id}")
    public Usuario modificarUsuarioPorId(Usuario usuario, @RequestParam long id){
        return usuarioService.modificarUsuarioPorId(usuario, id);
    }
}
