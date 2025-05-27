package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.dto.ProductoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Categoria;
import com.dwes.ApiRestBackEnd.model.Producto;
import com.dwes.ApiRestBackEnd.model.Talla;
import com.dwes.ApiRestBackEnd.repository.CategoriaRepository;
import com.dwes.ApiRestBackEnd.repository.ProductoRepository;
import com.dwes.ApiRestBackEnd.repository.TallaRepository;
import jakarta.persistence.EntityNotFoundException;
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
    private TallaRepository tallaRepository;
    private CategoriaRepository categoriaRepository;
    @Autowired
    public ProductoService(ProductoRepository productoRepository, TallaRepository tallaRepository, CategoriaRepository categoriaRepository){
        this.productoRepository = productoRepository;
        this.tallaRepository = tallaRepository;
        this.categoriaRepository = categoriaRepository;
    }
    public ProductoRequestDTO mapToRequestDTO(Producto producto){
        return ProductoRequestDTO.builder()
                .id(producto.getId())
                .nombre(producto.getNombre())
                .descripcion(producto.getDescripcion())
                .precio(producto.getPrecio())
                .stock(producto.getStock())
                .rutaImagen(producto.getRutaImagen())
                .nombreCategoria(producto.getCategoria().getNombre())
                .nombreTalla(producto.getTalla().getNombre())
                .build();
    }
    @Transactional //POST
    public Producto crearProducto(Producto producto) {
        if (producto.getCategoria() != null && producto.getCategoria().getId() != 0) {
            Categoria categoria = categoriaRepository.findById(producto.getCategoria().getId())
                    .orElseThrow(() -> new EntityNotFoundException("Categoría no encontrada con ID: " + producto.getCategoria().getId()));
            producto.setCategoria(categoria);
        } else {
            // Manejar el caso donde la categoría no se proporciona
            throw new IllegalArgumentException("ID de Categoría es requerido y debe ser válido.");
        }
        if (producto.getTalla() != null && producto.getTalla().getId() != 0) {
            Talla talla = tallaRepository.findById(producto.getTalla().getId())
                    .orElseThrow(() -> new EntityNotFoundException("Talla no encontrada con ID: " + producto.getTalla().getId()));
            producto.setTalla(talla);
        } else {
            // Manejar el caso donde la talla no se proporciona
            throw new IllegalArgumentException("ID de Talla es requerido y debe ser válido.");
        }
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
    public Producto modificarProductoPorId(Producto productoActualizado, long id) {
        Producto productoExistente = productoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado para modificar con ID: " + id));
        // Actualizar campos simples
        if (Objects.nonNull(productoActualizado.getNombre()) && !"".equalsIgnoreCase(productoActualizado.getNombre())) {
            productoExistente.setNombre(productoActualizado.getNombre());
        }
        if (Objects.nonNull(productoActualizado.getDescripcion()) && !"".equalsIgnoreCase(productoActualizado.getDescripcion())) {
            productoExistente.setDescripcion(productoActualizado.getDescripcion());
        }
        if (Objects.nonNull(productoActualizado.getPrecio())) {
            productoExistente.setPrecio(productoActualizado.getPrecio());
        }
        if (Objects.nonNull(productoActualizado.getStock())) {
            productoExistente.setStock(productoActualizado.getStock());
        }
        // Actualizar rutaImagen si se proporciona
        if (Objects.nonNull(productoActualizado.getRutaImagen())) {
            productoExistente.setRutaImagen(productoActualizado.getRutaImagen());
        }
        // --------- ACTUALIZAR CATEGORÍA Y TALLA ---------
        if (productoActualizado.getCategoria() != null && productoActualizado.getCategoria().getId() != 0) {
            long categoriaId = productoActualizado.getCategoria().getId();
            Categoria nuevaCategoria = categoriaRepository.findById(categoriaId)
                    .orElseThrow(() -> new EntityNotFoundException("Categoría no encontrada con ID: " + categoriaId));
            productoExistente.setCategoria(nuevaCategoria);
        } else {
            // throw new IllegalArgumentException("ID de Categoría es requerido para la actualización.");
        }
        if (productoActualizado.getTalla() != null && productoActualizado.getTalla().getId() != 0) {
            long tallaId = productoActualizado.getTalla().getId();
            Talla nuevaTalla = tallaRepository.findById(tallaId)
                    .orElseThrow(() -> new EntityNotFoundException("Talla no encontrada con ID: " + tallaId));
            productoExistente.setTalla(nuevaTalla);
        } else {
            // throw new IllegalArgumentException("ID de Talla es requerido para la actualización.");
        }
        return productoRepository.save(productoExistente);
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
    public List<ProductoRequestDTO> ordenarProdAsc(){
        List<Producto> productos = productoRepository.productoAsc();
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> ordenarProdDesc(){
        List<Producto> productos = productoRepository.productoDesc();
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
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> buscarProductosPorCategoria(long idCategoria){
        List<Producto> productos = productoRepository.buscarProductoPorCategoria(idCategoria);
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<ProductoRequestDTO> buscarProductosPorTalla(long idTalla){
        List<Producto> productos = productoRepository.buscarProductoPorTalla(idTalla);
        return productos.stream().map(this::mapToRequestDTO).collect(Collectors.toList());
    }
}
