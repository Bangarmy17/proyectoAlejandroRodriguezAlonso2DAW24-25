package com.dwes.ApiRestBackEnd.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "productoTalla")
public class productoTalla {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int stock; //stock que existe por cada talla
    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "idTalla")
    private Talla talla;
}
