package com.dwes.ApiRestBackEnd.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "carrito")
public class Carrito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "idProducto" , nullable = true)
    private Producto producto;

    private int cantidad;
    private LocalDateTime fecha_agregado = LocalDateTime.now();
}
