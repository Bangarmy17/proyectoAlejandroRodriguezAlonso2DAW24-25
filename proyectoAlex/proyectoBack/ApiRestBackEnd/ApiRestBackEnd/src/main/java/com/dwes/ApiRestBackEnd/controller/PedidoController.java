package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.dto.PedidoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Pedido;
import com.dwes.ApiRestBackEnd.model.RealizarPedido;
import com.dwes.ApiRestBackEnd.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173/" ,originPatterns = "*")
@RequestMapping("/pedidos")
@EnableWebSecurity
@EnableMethodSecurity
@RestController
public class PedidoController {
    private PedidoService pedidoService;
    @Autowired
    public PedidoController(PedidoService pedidoService){
        this.pedidoService = pedidoService;
    }

    @PostMapping("/crearPedido")
    public Pedido crearPedido(Long idUsuario, List<RealizarPedido> carrito){
        return pedidoService.crearPedido(idUsuario, carrito);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping()
    public List<PedidoRequestDTO> listarPedidos(){
        return pedidoService.listarPedidos();
    }

    @GetMapping("/obtenerPorId")
    public PedidoRequestDTO buscarPedidoPorId(@PathVariable long id){
        return pedidoService.buscarPedidoById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrarPedidosById")
    public ResponseEntity<Void> borrarPedidosPorId(@PathVariable long id){
        try{
            pedidoService.borrarPedidoPorId(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrarAllPedidos")
    public ResponseEntity<Void> borrarAllPedidos(){
        try{
            pedidoService.borrarAllPedidos();
            return ResponseEntity.ok().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
