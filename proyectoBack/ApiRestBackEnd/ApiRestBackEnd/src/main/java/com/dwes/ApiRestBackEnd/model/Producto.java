package com.dwes.ApiRestBackEnd.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String nombre;

    private String descripcion;

    @NotNull
    private double precio;

    @NotNull
    private int stock;

    private LocalDateTime fecha_registro = LocalDateTime.now();

    private String rutaImagen;

    @ManyToOne
    @JoinColumn(name = "idCategoria", nullable = false)
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "idTalla", nullable = false)
    private Talla talla;

    @OneToMany(mappedBy = "producto")
    private List<RealizarPedido> realizarPedidos;

    @OneToMany(mappedBy = "producto")
    private List<Carrito> carrito;
}
