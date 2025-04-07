package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.dto.ProductoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public List<ProductoRequestDTO> listarProductos(){
        List<ProductoRequestDTO> productos = productoService.listarTodosProductos();
        return productos;
    }
    @PostMapping("/crearProductos")
    public Producto crearProducto(Producto producto){
        return productoService.crearProducto(producto);
    }
    @GetMapping("/obtenerProductoPorId/{id}")
    public ProductoRequestDTO obtenerProductoPorId(@RequestParam long id){
        return productoService.buscarProductoPorId(id);
    }
    @PutMapping("/modificarProductoPorId/{id}")
    public Producto modificarProductoPorId(Producto producto, @RequestParam long id){
        return productoService.modificarProductoPorId(producto,id);
    }
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<Void> borrarProductoById(@RequestParam long id){
        try{
            productoService.buscarProductoPorId(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/borrar")
    public ResponseEntity<Void> borrarAllProductos(){
        try {
            productoService.borrarAllProductos();
            return ResponseEntity.ok().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
