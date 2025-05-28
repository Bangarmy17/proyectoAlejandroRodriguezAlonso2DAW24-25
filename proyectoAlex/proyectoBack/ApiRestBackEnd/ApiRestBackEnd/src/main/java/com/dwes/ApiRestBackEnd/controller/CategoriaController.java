package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.model.Categoria;
import com.dwes.ApiRestBackEnd.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173/" ,originPatterns = "*")
@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    private CategoriaService categoriaService;

    @Autowired
    public CategoriaController(CategoriaService categoriaService){
        this.categoriaService = categoriaService;
    }

    @GetMapping
    public List<Categoria> findCategorias(){
        return categoriaService.findCategorias();
    }
}
