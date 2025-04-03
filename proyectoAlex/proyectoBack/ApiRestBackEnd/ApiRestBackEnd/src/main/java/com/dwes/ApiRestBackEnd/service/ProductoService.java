package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class ProductoService {
    private ProductoRepository productoRepository;

    @Autowired
    public ProductoService(ProductoRepository productoRepository){
        this.productoRepository = productoRepository;
    }
    @Transactional(readOnly = true)
    public List<Producto> listarTodosProductos(){
        List<Producto> productos = productoRepository.findAll();
        return productos;
    }
    @Transactional
    public Producto crearProducto(Producto producto){
        return productoRepository.save(producto);
    }
    @Transactional(readOnly = true)
    public Producto buscarProductoPorId(long id){
        return productoRepository.findById(id).get();
    }
    @Transactional
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
}
