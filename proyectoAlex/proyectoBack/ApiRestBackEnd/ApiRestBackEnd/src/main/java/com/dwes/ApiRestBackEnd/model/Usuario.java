package com.dwes.ApiRestBackEnd.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {
    public Usuario(){
        this.roles = new ArrayList<>();
    }
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
    private boolean enabled; //campo que no existe en la base de datos y
    // que no se va a mapear que solo me va a servir para saber si es admin o no

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return id == usuario.id && Objects.equals(userName, usuario.userName);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, userName);
    }

    @Transient
    private boolean admin;


    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos;
    @OneToMany(mappedBy = "usuario")
    private List<Carrito> carrito;
    @JsonIgnoreProperties({"usuarios","handler","hibernateLazyInitializer"})
    @ManyToMany
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;

}
