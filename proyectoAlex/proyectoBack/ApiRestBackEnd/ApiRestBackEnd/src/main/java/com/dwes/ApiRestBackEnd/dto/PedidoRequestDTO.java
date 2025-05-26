package com.dwes.ApiRestBackEnd.dto;


import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class PedidoRequestDTO {
    private Long idPedido;
    private double precioTotal;
    private List<ProductoPedidoRequestDTO> productos;
}

