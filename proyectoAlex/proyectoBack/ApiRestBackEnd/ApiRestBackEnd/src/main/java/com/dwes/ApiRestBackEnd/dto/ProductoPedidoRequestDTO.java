package com.dwes.ApiRestBackEnd.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductoPedidoRequestDTO {
    private String nombreProducto;
    private int cantidad;
    private double precioProducto;
}
