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
                .nombre(producto.getNombre())
                .precio(producto.getPrecio())
                .stock(producto.getStock())
                .build();
    }
    @Transactional(readOnly = true) //get
    public List<ProductoRequestDTO> listarTodosProductos(){
        List<Producto> productos = productoRepository.findAll();
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional //post
    public Producto crearProducto(Producto producto){
        return productoRepository.save(producto);
    }
    @Transactional(readOnly = true) //get
    public ProductoRequestDTO buscarProductoPorId(long id){
        Producto producto = productoRepository.findById(id).get();
        return mapToRequestDTO(producto);
    }
    @Transactional //put
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
    @Transactional //delete
    public void borrarProdPorId(long id){
        Optional<Producto> producto = productoRepository.findById(id);
        if(!producto.isPresent()){
            throw new RuntimeException("ERROR el no existe un usuario con ese ID");
        }
        productoRepository.deleteById(id);
    }
    @Transactional //delete
    public void borrarAllProductos(){
        productoRepository.deleteAll();
    }
}
