package com.dwes.ApiRestBackEnd.repository;

import com.dwes.ApiRestBackEnd.model.Carrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarritoRepository extends JpaRepository<Carrito, Long> {
    //consulta para obtener carrito
    @Query("SELECT c FROM Carrito c WHERE c.usuario.id = ?1")
    List<Carrito> buscarCarritoPorUsuario(long idUsuario);
    //consulta para comprobar si el usuario ya tiene el producto en el carrito
    @Query("SELECT c FROM Carrito c WHERE c.usuario.id = ?1 AND c.producto.id = ?2")
    Optional<Carrito> findByUsuarioAndProducto(long idUsuario, long idProducto);

}
