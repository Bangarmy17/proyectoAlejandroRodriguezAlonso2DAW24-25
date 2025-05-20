package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.dto.ProductoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
@CrossOrigin(origins = "http://localhost:5173/" ,originPatterns = "*")
@EnableWebSecurity
@EnableMethodSecurity
@RestController
@RequestMapping("/producto")
public class ProductoController {
    private ProductoService productoService;

    @Autowired
    public ProductoController(ProductoService productoService){
        this.productoService = productoService;
    }

    @GetMapping()
    public List<ProductoRequestDTO> listarProductos(){
        List<ProductoRequestDTO> productos = productoService.listarTodosProductos();
        return productos;
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping()
    public Producto crearProducto(@RequestBody Producto producto){
        return productoService.crearProducto(producto);
    }
    @GetMapping("/obtenerProductoPorId/{id}")
    public ProductoRequestDTO obtenerProductoPorId(@PathVariable long id){
        return productoService.buscarProductoPorId(id);
    }
    @GetMapping("/obtenerStockPorPrecio")
    public int obtenerStockPorPrecio(@PathVariable double precio){
        return productoService.obtenerStockPorPrecio(precio);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/modificarProductoPorId/{id}")
    public Producto modificarProductoPorId(@RequestBody Producto producto, @PathVariable long id){
        return productoService.modificarProductoPorId(producto,id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarProductoById(@PathVariable long id){
        try{
            productoService.borrarProdPorId(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
    @PreAuthorize("hasRole('ADMIN')")
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
    public List<ProductoRequestDTO> precioMin(@PathVariable double precio){
        return productoService.buscarPorPrecioMin(precio);
    }
    @GetMapping("/filtrado/precioMax")
    public List<ProductoRequestDTO> precioMax(@PathVariable double precio){
        return productoService.buscarPorPrecioMax(precio);
    }
    @GetMapping("/filtrado/prodAsc")
    public List<ProductoRequestDTO> prodAsc(){
        return productoService.ordenarProdAsc();
    }
    @GetMapping("/filtrado/prodDes")
    public List<ProductoRequestDTO> prodDes(){
        return productoService.ordenarProdDesc();
    }
    @GetMapping("/filtrado/precioMinYMax")
    public List<ProductoRequestDTO> precioMinYMax(@PathVariable double precioMin,@PathVariable double precioMax){
        return productoService.buscarEntrePrecioMinYMax(precioMin, precioMax);
    }
    @GetMapping("/filtrado/categoria/{idCategoria}")
    public List<ProductoRequestDTO> busquedaPorCategoria(@PathVariable long idCategoria){
        return productoService.buscarProductosPorCategoria(idCategoria);
    }
    @GetMapping("/filtrado/talla/{idTalla}")
    public List<ProductoRequestDTO> busquedaPorTalla(@PathVariable long idTalla){
        return productoService.buscarProductosPorTalla(idTalla);
    }
}
