package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.dto.ProductoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductoService {
    private ProductoRepository productoRepository;
    @Autowired
    public ProductoService(ProductoRepository productoRepository){
        this.productoRepository = productoRepository;
    }
    public ProductoRequestDTO mapToRequestDTO(Producto producto){
        return ProductoRequestDTO.builder()
                .id(producto.getId())
                .nombre(producto.getNombre())
                .descripcion(producto.getDescripcion())
                .precio(producto.getPrecio())
                .stock(producto.getStock())
                .rutaImagen(producto.getRutaImagen())
                .build();
    }
    @Transactional //POST
    public Producto crearProducto(Producto producto){
        return productoRepository.save(producto);
    }
    @Transactional(readOnly = true) //GET
    public List<ProductoRequestDTO> listarTodosProductos(){
        List<Producto> productos = productoRepository.findAll();
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional(readOnly = true) //GET
    public ProductoRequestDTO buscarProductoPorId(long id){
        Producto producto = productoRepository.findById(id).get();
        return mapToRequestDTO(producto);
    }
    @Transactional(readOnly = true) //GET
    public int obtenerStockPorPrecio(double precio){
        return productoRepository.obtenerStockPorPrecio(precio);
    }
    @Transactional //PUT
    public Producto modificarProductoPorId(Producto producto, long id){
        Producto productoNuevo = productoRepository.findById(id).get();
        if(Objects.nonNull(producto.getNombre()) && !"".equalsIgnoreCase(producto.getNombre())){
            productoNuevo.setNombre(producto.getNombre());
        }
        if(Objects.nonNull(producto.getDescripcion()) && !"".equalsIgnoreCase(producto.getDescripcion())){
            productoNuevo.setDescripcion(producto.getDescripcion());
        }
        if(Objects.nonNull(producto.getPrecio())){
            productoNuevo.setPrecio(producto.getPrecio());
        }
        if(Objects.nonNull(producto.getStock())){
            productoNuevo.setStock(producto.getStock());
        }
        return productoRepository.save(productoNuevo);
    }
    @Transactional //DELETE
    public void borrarProdPorId(long id){
        Optional<Producto> producto = productoRepository.findById(id);
        if(!producto.isPresent()){
            throw new RuntimeException("ERROR el no existe un usuario con ese ID");
        }
        productoRepository.deleteById(id);
    }
    @Transactional //DELETE
    public void borrarAllProductos(){
        productoRepository.deleteAll();
    }
    //------------------------FILTROS PARA EL USER----------------------------
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> ordenarPorPrecio(){
        List<Producto> productos = productoRepository.productosOrdenadosPrecio();
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> ordenarPorPrecioDesc(){
        List<Producto> productos = productoRepository.precioDescendente();
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> buscarPorPrecioMin(double precio){
        List<Producto> productos = productoRepository.buscarPrecioMinimo(precio);
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> buscarPorPrecioMax(double precio){
        List<Producto> productos = productoRepository.buscarPrecioMaximo(precio);
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> buscarEntrePrecioMinYMax(double precioMin, double precioMax){
        List<Producto> productos = productoRepository.buscarPrecioEntreMinYMax(precioMin, precioMax);
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
}
