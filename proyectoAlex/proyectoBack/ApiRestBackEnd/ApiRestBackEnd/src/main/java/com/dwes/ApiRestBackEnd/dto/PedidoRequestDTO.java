package com.dwes.ApiRestBackEnd.dto;

import com.dwes.ApiRestBackEnd.model.Producto;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PedidoRequestDTO {
    private Long idPedido;
    private double precioTotal;
    private String nombreUsuario;
    private String apellidosUsuario;
    private String direccionUsuario;
    private List<Producto> productos;
}

