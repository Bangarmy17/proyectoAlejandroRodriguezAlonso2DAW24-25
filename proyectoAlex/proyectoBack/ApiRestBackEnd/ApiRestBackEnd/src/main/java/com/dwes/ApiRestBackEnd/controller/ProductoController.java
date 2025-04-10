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
    @GetMapping("/obtenerStockPorPrecio")
    public int obtenerStockPorPrecio(@RequestParam double precio){
        return productoService.obtenerStockPorPrecio(precio);
    }
    @PutMapping("/modificarProductoPorId/{id}")
    public Producto modificarProductoPorId(Producto producto, @RequestParam long id){
        return productoService.modificarProductoPorId(producto,id);
    }
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<Void> borrarProductoById(@RequestParam long id){
        try{
            productoService.borrarProdPorId(id);
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

    //-----------------------FILTROS--------------------------
    @GetMapping("/filtrado/precioAsc")
    public List<ProductoRequestDTO> precioAsc(){
        return productoService.ordenarPorPrecio();
    }
    @GetMapping("/filtrado/precioDes")
    public List<ProductoRequestDTO> precioDes(){
        return productoService.ordenarPorPrecioDesc();
    }
    @GetMapping("/filtrado/precioMin")
    public List<ProductoRequestDTO> precioMin(@RequestParam double precio){
        return productoService.buscarPorPrecioMin(precio);
    }
    @GetMapping("/filtrado/precioMax")
    public List<ProductoRequestDTO> precioMax(@RequestParam double precio){
        return productoService.buscarPorPrecioMax(precio);
    }
    @GetMapping("/filtrado/precioMinYMax")
    public List<ProductoRequestDTO> precioMinYMax(@RequestParam double precioMin,@RequestParam double precioMax){
        return productoService.buscarEntrePrecioMinYMax(precioMin, precioMax);
    }
}
