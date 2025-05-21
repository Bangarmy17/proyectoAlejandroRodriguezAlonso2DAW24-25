package com.dwes.ApiRestBackEnd.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductosCarritoRequestDTO {
    private long id;
    private long idProducto;
    private String nombreProducto;
    private String rutaImagen;
    private int cantidad;
    private double precioUnitario;
    private String nombreCategoria;
    private String nombreTalla;
    private double subtotal;
}
