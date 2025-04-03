package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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

    public Producto crearProducto(Producto producto){
        return productoRepository.save(producto);
    }
}
