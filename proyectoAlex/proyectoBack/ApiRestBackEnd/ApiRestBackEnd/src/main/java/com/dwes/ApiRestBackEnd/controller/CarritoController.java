package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.dto.ProductosCarritoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Carrito;
import com.dwes.ApiRestBackEnd.service.CarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/" ,originPatterns = "*")
@EnableWebSecurity
@EnableMethodSecurity
@RestController
@RequestMapping("/carrito")
public class CarritoController {
    private CarritoService carritoService;
    @Autowired
    public CarritoController(CarritoService carritoService){
        this.carritoService = carritoService;
    }
    //Con este metodo lo que voy a hacer es cargar la informacion de cada producto
    //que X usuario haya agregado al carrito
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @GetMapping("/{idUsuario}")
    public List<ProductosCarritoRequestDTO> obtenerCarritoUsuario(@PathVariable long idUsuario){
        return carritoService.obtenerCarritoUsuario(idUsuario);
    }
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @PostMapping("/agregar/{idUsuario}/{idProducto}/{cantidad}")
    public ResponseEntity<ProductosCarritoRequestDTO> agregarProducto(@PathVariable long idUsuario, @PathVariable long idProducto, @PathVariable int cantidad) {
        Carrito carritoActualizado = carritoService.agregarProductoCarrito(idUsuario, idProducto, cantidad);
        ProductosCarritoRequestDTO carritoRequestDTO = carritoService.mapToRequestDTO(carritoActualizado);
        return ResponseEntity.ok(carritoRequestDTO);
    }
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @DeleteMapping("/eliminar/{idUsuario}/{idProducto}")
    public ResponseEntity<?> eliminarProducto(@PathVariable long idUsuario, @PathVariable long idProducto) {
        carritoService.eliminarProductoCarrito(idUsuario, idProducto);
        return ResponseEntity.ok("Producto eliminado del carrito");
    }

}
