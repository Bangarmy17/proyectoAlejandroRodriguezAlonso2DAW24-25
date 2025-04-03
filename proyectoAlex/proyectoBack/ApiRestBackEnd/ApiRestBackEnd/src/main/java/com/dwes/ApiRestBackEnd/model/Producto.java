package com.dwes.ApiRestBackEnd.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "productos")
public class Producto {
    private long id;
    private String nombre;
    private String descripcion;
    private double precio;
    private int stock;
    private LocalDateTime fecha_registro;
}
