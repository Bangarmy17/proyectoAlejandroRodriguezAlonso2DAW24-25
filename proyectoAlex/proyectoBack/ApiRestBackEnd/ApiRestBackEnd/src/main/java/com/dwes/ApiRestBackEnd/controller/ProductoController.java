package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    private ProductoService productoService;

    @Autowired
    public ProductoController(ProductoService productoService){
        this.productoService = productoService;
    }

    @GetMapping("/listadoProductos")
    public List<Producto> listarProductos(){
        List<Producto> productos = productoService.listarTodosProductos();
        return productos;
    }
    @PostMapping("/crearProductos")
    public Producto crearProducto(Producto producto){
        return productoService.crearProducto(producto);
    }
}
