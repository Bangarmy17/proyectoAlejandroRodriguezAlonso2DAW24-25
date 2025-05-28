package com.dwes.ApiRestBackEnd.repository;

import com.dwes.ApiRestBackEnd.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    //Metodo para que el usuario pueda revisar los pedidos que ha tenido
    List<Pedido> findByUsuarioId(Long idUsuario);
}
