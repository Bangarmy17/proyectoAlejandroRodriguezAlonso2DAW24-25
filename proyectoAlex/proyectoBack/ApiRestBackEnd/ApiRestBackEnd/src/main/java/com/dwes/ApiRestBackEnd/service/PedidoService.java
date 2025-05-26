package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.dto.PedidoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.ProductoPedidoRequestDTO;
import com.dwes.ApiRestBackEnd.dto.ProductoUserRequestDTO;
import com.dwes.ApiRestBackEnd.model.*;
import com.dwes.ApiRestBackEnd.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PedidoService {
    private PedidoRepository pedidoRepository;
    private ProductoRepository productoRepository;
    private RealizarPedidoRepository realizarPedidoRepository;
    private UsuarioRepository usuarioRepository;
    private CarritoRepository carritoRepository;
    @Autowired
    public PedidoService (PedidoRepository pedidoRepository, ProductoRepository productoRepository, RealizarPedidoRepository realizarPedidoRepository, UsuarioRepository usuarioRepository, CarritoRepository carritoRepository){
        this.pedidoRepository = pedidoRepository;
        this.productoRepository = productoRepository;
        this.realizarPedidoRepository = realizarPedidoRepository;
        this.usuarioRepository = usuarioRepository;
        this.carritoRepository = carritoRepository;
    }
    public ProductoUserRequestDTO mapToRequestDTO2(Producto producto){
        return ProductoUserRequestDTO.builder()
                .nombre(producto.getNombre())
                .precio(producto.getPrecio())
                //.cantidad(producto)
                .build();
    }
    public PedidoRequestDTO mapToRequestDTO(Pedido pedido) {
        return PedidoRequestDTO.builder()
                .idPedido(pedido.getId())
                .precioTotal(pedido.getPrecioTotal())
                .productos(pedido.getRealizarPedidos() == null ?
                        List.of() :
                        pedido.getRealizarPedidos().stream()
                                .map(realizarPedido -> ProductoPedidoRequestDTO.builder()
                                        .nombreProducto(realizarPedido.getProducto().getNombre())
                                        .cantidad(realizarPedido.getCantidad())
                                        .precioProducto(realizarPedido.getProducto().getPrecio())
                                        .build())
                                .collect(Collectors.toList()))
                .build();
    }
    //POST
    @Transactional
    public Pedido crearPedido(long idUsuario) {
        //Hay varios prints a modo de "depuracion por que la lié y no me creaba los pedidos"
        //System.out.println("Iniciando la creación del pedido...");
        // Obtengo el usuario
        Usuario usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        //System.out.println("Usuario encontrado: " + usuario.getId());
        // Obtengo el carrito del usuario
        List<Carrito> carrito = carritoRepository.buscarCarritoPorUsuario(idUsuario);
        //System.out.println("Productos en el carrito: " + carrito.size());
        // Aquí me aseguro de que no se pueda hacer un pedido desde el carrito si este está vacio
        // aunque de igual manera no debería hacer falta porque en el front puse un alert que le sale al usuario en caso de que intente acceder
        // a la parte del carrito si este está vacio y además le redirecciona al menu principal de la pagina
        if (carrito.isEmpty()) {
            throw new RuntimeException("El carrito está vacío, no se puede realizar un pedido.");
        }
        // Calcular total
        double precioTotal = carrito.stream()
                .mapToDouble(c -> c.getCantidad() * c.getProducto().getPrecio())
                .sum();
        //System.out.println("Precio total calculado: " + precioTotal);
        // Crear el pedido
        Pedido pedido = new Pedido();
        pedido.setUsuario(usuario);
        pedido.setPrecioTotal(precioTotal);
        Pedido pedidoGuardado = pedidoRepository.save(pedido);
        //System.out.println("Pedido guardado con ID: " + pedidoGuardado.getId());
        // Transferir productos del carrito al pedido
        for (Carrito item : carrito) {
            RealizarPedido realizarPedido = new RealizarPedido();
            realizarPedido.setPedido(pedidoGuardado);
            realizarPedido.setProducto(item.getProducto());
            realizarPedido.setCantidad(item.getCantidad());
            realizarPedido.setSubtotal(item.getCantidad() * item.getProducto().getPrecio());
            realizarPedidoRepository.save(realizarPedido);
            //Aquí lo que hago es que se va a reducir el stock de cada producto
            // (ya que estoy dentro del bucle que recorre el carrito) en base a la cantidad que el
            // usuario seleccionó de cada producto que va a comprar
            Producto producto = item.getProducto();
            int nuevoStock = producto.getStock() - item.getCantidad();
            if (nuevoStock < 0) {
                throw new RuntimeException("Stock insuficiente para el producto: " + producto.getNombre());
            }
            //le seteo el nuevo stock
            producto.setStock(nuevoStock);
            //actualizo el producto
            productoRepository.save(producto);
        }
        //System.out.println("Productos transferidos correctamente.");
        // Una vez que el pedido ha sido creado lo que hago es vaciar el carrito
        // ya que no le veo mucho sentido a que siga ahí
        carritoRepository.deleteByUsuarioId(idUsuario);
        System.out.println("Carrito vaciado para el usuario: " + idUsuario);
        return pedidoGuardado;
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
