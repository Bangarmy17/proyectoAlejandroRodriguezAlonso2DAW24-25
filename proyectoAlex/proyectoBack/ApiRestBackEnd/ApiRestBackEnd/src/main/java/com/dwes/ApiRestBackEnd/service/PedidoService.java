package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.dto.PedidoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.ProductoUserRequestDTO;
import com.dwes.ApiRestBackEnd.model.Pedido;
import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.model.RealizarPedido;
import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.repository.PedidoRepository;
import com.dwes.ApiRestBackEnd.repository.ProductoRepository;
import com.dwes.ApiRestBackEnd.repository.RealizarPedidoRepository;
import com.dwes.ApiRestBackEnd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PedidoService {
    private PedidoRepository pedidoRepository;
    private ProductoRepository productoRepository;
    private RealizarPedidoRepository realizarPedidoRepository;
    private UsuarioRepository usuarioRepository;
    @Autowired
    public PedidoService (PedidoRepository pedidoRepository, ProductoRepository productoRepository, RealizarPedidoRepository realizarPedidoRepository, UsuarioRepository usuarioRepository){
        this.pedidoRepository = pedidoRepository;
        this.productoRepository = productoRepository;
        this.realizarPedidoRepository = realizarPedidoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    public ProductoUserRequestDTO mapToRequestDTO2(Producto producto){
        return ProductoUserRequestDTO.builder()
                .nombre(producto.getNombre())
                .precio(producto.getPrecio())
                //.cantidad(producto)
                .build();
    }

    public PedidoRequestDTO mapToRequestDTO(Pedido pedido){
        Usuario usuario = pedido.getUsuario();
        return PedidoRequestDTO.builder()
                .idPedido(pedido.getId())
                .precioTotal(pedido.getPrecioTotal())
                .nombreUsuario(usuario.getNombre())
                .apellidosUsuario(usuario.getApellidos())
                .direccionUsuario(usuario.getDireccion())
                .productos(pedido.getRealizarPedidos() == null ?
                        List.of() :
                        pedido.getRealizarPedidos().stream()
                                .map(RealizarPedido::getProducto)
                                .map(this::mapToRequestDTO2)
                                .collect(Collectors.toList()))
                .build();
    }

    //POST
    @Transactional
    public Pedido crearPedido(@RequestParam Long idUsuario, List<RealizarPedido> prodsDelPedido){
        Usuario usuario = usuarioRepository.findById(idUsuario).get(); //obtengo el usuario que realizrá el pedido
        Pedido pedido = new Pedido(); //creo un objeto pedido
        pedido.setUsuario(usuario); //le asigni el usuario
        pedido.setFecha_registro(LocalDateTime.now());

        double precioTotal = 0;

        for(RealizarPedido realizarPedido : prodsDelPedido){
            Producto producto = productoRepository.findById(realizarPedido.getProducto().getId()).get();

            if(producto.getStock() < realizarPedido.getCantidad()){ //comprobar el stock
                throw new RuntimeException("Stock insuficiente para el producto: " + producto.getNombre());
            }

            producto.setStock(producto.getStock() - realizarPedido.getCantidad()); //reduzco el stock
            productoRepository.save(producto);

            realizarPedido.setSubtotal(producto.getPrecio() * realizarPedido.getCantidad());
            realizarPedido.setPedido(pedido);
            realizarPedidoRepository.save(realizarPedido);

            precioTotal += realizarPedido.getSubtotal();
        }

        pedido.setPrecioTotal(precioTotal);

        return pedidoRepository.save(pedido);
    }
    //GET
    @Transactional(readOnly = true)
    public PedidoRequestDTO buscarPedidoById(long id){
        Pedido pedido = pedidoRepository.findById(id).get();
        return mapToRequestDTO(pedido);
    }//GET
    @Transactional(readOnly = true)
    public List<PedidoRequestDTO> listarPedidos(){
        List<Pedido> listadoPedidos = pedidoRepository.findAll();
        return listadoPedidos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    //PUT

    //DELETE
    @Transactional
    public void borrarPedidoPorId(long id){
        Optional<Pedido> pedidos = pedidoRepository.findById(id);
        if(!pedidos.isPresent()){
            throw new RuntimeException("ERROR el no existe un usuario con ese ID");
        }
        pedidoRepository.deleteById(id);
    }
    //DELETE
    @Transactional
    public void borrarAllPedidos(){
        pedidoRepository.deleteAll();
    }
}
