package com.dwes.ApiRestBackEnd.repository;

import com.dwes.ApiRestBackEnd.model.RealizarPedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RealizarPedidoRepository extends JpaRepository<RealizarPedido, Long> {
}
