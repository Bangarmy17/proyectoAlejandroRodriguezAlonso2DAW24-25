package com.dwes.ApiRestBackEnd.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
    @Column(unique = true,  nullable = false)
    @NotBlank //valído que el campo no sea vacío y tenga un tamaño minimo y maximo
    @Size(min = 4, max = 12)
    private String userName;
    @Column(nullable = false)
    @NotBlank
    private String password;
    private LocalDateTime fecha_registro = LocalDateTime.now();

    @Transient
    private boolean admin; //campo que no existe en la base de datos y
    // que no se va a mapear que solo me va a servir para saber si es admin o no




    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos;

    @ManyToMany
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Rol> roles;

}
