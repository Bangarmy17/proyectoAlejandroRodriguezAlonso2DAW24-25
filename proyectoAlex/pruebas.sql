use tiendaRopa;
--
SELECT * FROM usuario;
--
SELECT * FROM rol;
--
SELECT * FROM producto;
--
SELECT *
FROM usuario AS u
WHERE u.id = 1;
--
SELECT u.email, u.userName, u.password
FROM usuario AS U;
--
SELECT * FROM pedido;
--
SELECT * FROM realizarPedido;
--
SELECT * FROM producto AS p ORDER BY p.precio ASC;
--
SELECT * FROM producto AS p ORDER BY p.precio DESC;
