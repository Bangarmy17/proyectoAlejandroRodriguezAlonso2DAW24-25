package com.dwes.ApiRestBackEnd.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductoRequestDTO {
    private String nombre;
    private String descripcion;
    private double precio;
    private int stock;
}
