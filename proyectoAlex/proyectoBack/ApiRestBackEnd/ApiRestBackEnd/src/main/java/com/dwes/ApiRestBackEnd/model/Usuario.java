package com.dwes.ApiRestBackEnd.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank
    private String nombre;
    @NotBlank
    private String apellidos;
    @Email
    private String email;
    private String direccion;
    @NotBlank
    private String userName;
    @NotBlank
    private String password;
    private LocalDateTime fecha_registro = LocalDateTime.now();

    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos;
}
