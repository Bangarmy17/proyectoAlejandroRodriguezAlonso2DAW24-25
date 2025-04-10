package com.dwes.ApiRestBackEnd.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductoUserRequestDTO {
    private String nombre;
    private double precio;
   // private int cantidad;
}
