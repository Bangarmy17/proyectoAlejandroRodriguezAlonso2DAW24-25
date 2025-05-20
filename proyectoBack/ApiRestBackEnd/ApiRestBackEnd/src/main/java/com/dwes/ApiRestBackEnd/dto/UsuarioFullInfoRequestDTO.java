package com.dwes.ApiRestBackEnd.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UsuarioFullInfoRequestDTO {
    private String nombre;
    private String apellidos;
    private String email;
    private String direccion;
    private String userName;
    private String password;
}
