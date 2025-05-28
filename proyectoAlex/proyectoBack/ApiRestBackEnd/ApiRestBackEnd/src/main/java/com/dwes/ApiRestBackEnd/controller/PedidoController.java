package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.dto.PedidoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Pedido;
import com.dwes.ApiRestBackEnd.service.PedidoService;
import jakarta.persistence.EntityNotFoundException;
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
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @PostMapping("/crearPedido/{idUsuario}")
    public ResponseEntity<Pedido> crearPedido(@PathVariable long idUsuario){
       Pedido pedido = pedidoService.crearPedido(idUsuario);
       return ResponseEntity.ok(pedido);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/listarPedidos")
    public List<PedidoRequestDTO> listarPedidos(){
        return pedidoService.listarPedidos();
    }

    @GetMapping("/usuario/{idUsuario}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')") // O ajusta la seguridad según necesites
    // Podrías añadir una verificación para que un USER solo pueda ver sus propios pedidos.
    // Esto requeriría obtener el Principal de Spring Security y comparar IDs.
    public ResponseEntity<List<PedidoRequestDTO>> obtenerPedidosDelUsuario(@PathVariable Long idUsuario) {
        try {
            List<PedidoRequestDTO> pedidos = pedidoService.obtenerPedidosPorUsuario(idUsuario);
            if (pedidos.isEmpty()) { //En caso que la lista de los pedidos esté vacia pues igualmente va a devolver OK
                return ResponseEntity.ok(pedidos);
            }
            return ResponseEntity.ok(pedidos);
        } catch (EntityNotFoundException e) {
            // Si el usuario no existe lanza excepcion
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/obtenerPorId/{id}")
    public PedidoRequestDTO buscarPedidoPorId(@PathVariable long id){
        return pedidoService.buscarPedidoById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
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
