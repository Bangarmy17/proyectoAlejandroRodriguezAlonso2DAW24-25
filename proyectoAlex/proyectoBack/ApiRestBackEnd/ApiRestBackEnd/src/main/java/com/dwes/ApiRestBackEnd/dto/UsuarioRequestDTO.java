package com.dwes.ApiRestBackEnd.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UsuarioRequestDTO {
    private String email;
    private String userName;
    private String password;
}
