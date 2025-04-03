package com.dwes.ApiRestBackEnd.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "pedidos")
public class Pedido {
    private long id;
    private double precioTotal;
    private LocalDateTime fecha_registro;
}
