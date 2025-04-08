package com.dwes.ApiRestBackEnd.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductoPedidoDTO {
    private long idProducto;
    private int cantidad;
}
