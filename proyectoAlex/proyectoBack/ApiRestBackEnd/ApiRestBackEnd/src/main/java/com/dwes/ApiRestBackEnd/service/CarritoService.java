package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.dto.ProductosCarritoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Carrito;
import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.repository.CarritoRepository;
import com.dwes.ApiRestBackEnd.repository.ProductoRepository;
import com.dwes.ApiRestBackEnd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarritoService {
    private CarritoRepository carritoRepository;
    private ProductoRepository productoRepository;
    private UsuarioRepository usuarioRepository;

    @Autowired
    public CarritoService(CarritoRepository carritoRepository, ProductoRepository productoRepository, UsuarioRepository usuarioRepository){
        this.carritoRepository = carritoRepository;
        this.productoRepository = productoRepository;
        this.usuarioRepository = usuarioRepository;
    }
    public ProductosCarritoRequestDTO mapToRequestDTO(Carrito carrito){
        return ProductosCarritoRequestDTO.builder()
                .id(carrito.getId()).idProducto(carrito.getProducto().getId())
                .nombreProducto(carrito.getProducto().getNombre())
                .rutaImagen(carrito.getProducto().getRutaImagen())
                .cantidad(carrito.getCantidad())
                .precioUnitario(carrito.getProducto().getPrecio())
                .nombreCategoria(carrito.getProducto().getCategoria().getNombre())
                .nombreTalla(carrito.getProducto().getTalla().getNombre())
                .subtotal(carrito.getCantidad() * carrito.getProducto().getPrecio())
                .build();
    }
    //metodo para mostrar el carrito para un usuario
    @Transactional(readOnly = true)
    public List<ProductosCarritoRequestDTO> obtenerCarritoUsuario(long idUsuario){
        List<Carrito> carrito = carritoRepository.buscarCarritoPorUsuario(idUsuario);
        return carrito.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    //metodo para agregar un producto al carrito de un usuario
    @Transactional
    public Carrito agregarProductoCarrito(long idUsuario, long idProducto, int cantidad){
        Usuario usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Producto producto = productoRepository.findById(idProducto)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        Optional<Carrito> carritoExistente = carritoRepository.findByUsuarioAndProducto(idUsuario, idProducto);
        if (carritoExistente.isPresent()) {
            // Aqui lo que estoy haciendo es que si el producto ya está en
            // el carrito solo le actualizo su cantidad
            Carrito carrito = carritoExistente.get();
            carrito.setCantidad(carrito.getCantidad() + cantidad);
            return carritoRepository.save(carrito);
        }
        // en caso de que el producto no este en el carro pues se agrega
        Carrito nuevoCarrito = new Carrito();
        nuevoCarrito.setUsuario(usuario);
        nuevoCarrito.setProducto(producto);
        nuevoCarrito.setCantidad(cantidad);
        //lo guardo
        return carritoRepository.save(nuevoCarrito);
    }
    @Transactional
    public void eliminarProductoCarrito(long idUsuario, long idProducto) {
        Optional<Carrito> carritoExistente = carritoRepository.findByUsuarioAndProducto(idUsuario, idProducto);
        if (carritoExistente.isPresent()) { //si el producto existe ese articulo en el carrito lo borro
            carritoRepository.delete(carritoExistente.get());
        } else {
            //en caso contrario controlo con una excepcion
            throw new RuntimeException("El producto no está en el carrito");
        }
    }

}
