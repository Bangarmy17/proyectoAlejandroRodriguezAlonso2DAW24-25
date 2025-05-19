package com.dwes.ApiRestBackEnd.repository;

import com.dwes.ApiRestBackEnd.dto.ProductoRequestDTO;
import com.dwes.ApiRestBackEnd.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    @Query("SELECT SUM(p.stock) FROM Producto p WHERE p.precio >= ?1")
    int obtenerStockPorPrecio(double precio);

    //FILTROS PARA EL USER
    @Query("SELECT p FROM Producto p ORDER BY p.precio ASC")
    List<Producto> productosOrdenadosPrecio();

    @Query("SELECT p FROM Producto p ORDER BY p.precio DESC")
    List<Producto> precioDescendente();

    @Query("SELECT p FROM Producto p ORDER BY p.nombre ASC")
    List<Producto> productoAsc();

    @Query("SELECT p FROM Producto p ORDER BY p.nombre DESC")
    List<Producto> productoDesc();

    @Query("SELECT p FROM Producto p WHERE p.precio >= ?1 ORDER BY p.precio ASC")
    List<Producto> buscarPrecioMinimo(double precio);

    @Query("SELECT p FROM Producto p WHERE p.precio <= ?1 ORDER BY p.precio ASC")
    List<Producto> buscarPrecioMaximo(double precio);

    @Query("SELECT p FROM Producto p WHERE p.precio BETWEEN ?1 AND ?2 ORDER BY p.precio ASC")
    List<Producto> buscarPrecioEntreMinYMax(double precioMin, double precioMax);

    @Query("SELECT p FROM Producto p JOIN ProductoCategoria pc ON p.id = pc.producto.id WHERE pc.categoria.id = ?1")
    List<Producto> buscarProductoPorCategoria(long idCategoria);
}


