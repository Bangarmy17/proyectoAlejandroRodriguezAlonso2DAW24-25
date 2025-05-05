-- Obtener todos los usuarios
SELECT * FROM usuario;
-- Obtener un usuario específico por su ID
SELECT * FROM usuario WHERE id = 1;
-- Obtener todos los usuarios con sus roles
SELECT u.id, u.nombre, u.apellidos, r.name AS rol 
FROM usuario u
JOIN user_roles ur ON u.id = ur.user_id
JOIN rol r ON ur.role_id = r.id;
 -- Obtener todos los productos
SELECT * FROM producto;
-- Obtener productos junto con sus categorías
SELECT p.id, p.nombre, c.nombre AS categoria 
FROM producto p
JOIN productoCategoria pc ON p.id = pc.idProducto
JOIN categoria c ON pc.idCategoria = c.id;
-- Obtener productos con sus tallas y stock específico
SELECT p.id, p.nombre, t.nombre AS talla, pt.stock 
FROM producto p
JOIN productoTalla pt ON p.id = pt.idProducto
JOIN talla t ON pt.idTalla = t.id;
-- Obtener todos los pedidos
SELECT * FROM pedido;
-- Obtener pedidos con detalles de usuario
SELECT p.id, p.precioTotal, p.fecha_registro, u.nombre, u.apellidos 
FROM pedido p
JOIN usuario u ON p.idUsuario = u.id;
-- Obtener los productos en cada pedido
SELECT rp.idPedido, pr.nombre AS producto, rp.cantidad, rp.subtotal 
FROM realizarPedido rp
JOIN producto pr ON rp.idProducto = pr.id;

SELECT 
    p.id AS idPedido, 
    u.nombre AS nombreUsuario, 
    u.apellidos AS apellidoUsuario, 
    SUM(rp.subtotal) AS precioTotal
FROM pedido p
JOIN usuario u ON p.idUsuario = u.id
JOIN realizarPedido rp ON p.id = rp.idPedido
GROUP BY p.id, u.nombre, u.apellidos;
