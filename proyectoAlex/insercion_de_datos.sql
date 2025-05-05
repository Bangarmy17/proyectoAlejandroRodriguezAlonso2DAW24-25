use tiendaRopa;
INSERT INTO usuario (nombre, apellidos, direccion, email, userName, password) VALUES
('Paco', 'Fernandez Alonso', 'Casa 12', 'paco17@gmail.com', 'paquirrin17', '123456789C'),
('Maria', 'Garcia Solis', 'Casa 23', 'mariSolis@gmail.com', 'mariLoqui', '455323441a'),
('Luisa', 'Fernandez Fernandez', 'Calle España 67 7ºB', 'luisa@gmail.com', 'luisaShopping', 'Luisa777$'),
('Fernanda', 'Santana Falcon', 'Calle las Palmas 12 1º', 'fernan12@gmail.com', 'ferna12345', 'Fernanda12345$'),
('Sara', 'Alonso Garcia', 'Calle Bermudez de Castro 35 4º izq', 'saraAG@gmail.com', 'Sara7', 'Sara170678'),
('Juan', 'Rodriguez Fernandez', 'Casa 123', 'Juan@gmail.com', 'Juanico12', 'JuanJuanito12'),
('Pedro', 'Perez Busquets', 'Calle Cataluña 12', 'pedroBcn@gmail.com', 'PedrdoPB', '27663727Q'),
('David', 'Garcia Suarez', 'Calle Ramon y Cajal 3º B', 'davidgs@gmail.com', 'davidlocotron', '282837477D'),
('Fei', 'Xiao Pao', 'La corredoria alta 12', 'linganguli@gmail.com', 'chingchon12', '1234567777x');
-- Inserción de 5 pantalones de anime
INSERT INTO producto (nombre, descripcion, precio, stock) VALUES
('Pantalón Naruto', 'Pantalón con diseño de Naruto Uzumaki', 39.99, 20),
('Pantalón Dragon Ball', 'Pantalón de Dragon Ball Z con diseño de Goku', 42.99, 15),
('Pantalón One Piece', 'Pantalón estampado de Luffy y su tripulación', 37.99, 18),
('Pantalón Attack on Titan', 'Pantalón con emblema de la Legión de Exploración', 45.99, 12),
('Pantalón Jujutsu Kaisen', 'Pantalón con diseños de Gojo Satoru y Sukuna', 41.99, 14);
-- Inserción de 5 camisetas de anime
INSERT INTO producto (nombre, descripcion, precio, stock) VALUES
('Camiseta Naruto', 'Camiseta con estampado de Naruto y Sasuke', 19.99, 30),
('Camiseta Dragon Ball', 'Camiseta con ilustración de Goku Ultra Instinto', 22.99, 25),
('Camiseta One Piece', 'Camiseta con el logo de los Sombrero de Paja', 21.99, 28),
('Camiseta Attack on Titan', 'Camiseta con el titán fundador', 24.99, 20),
('Camiseta Jujutsu Kaisen', 'Camiseta con la técnica de expansión de Gojo', 23.99, 22);
-- Inserción de 5 sudaderas de anime
INSERT INTO producto (nombre, descripcion, precio, stock) VALUES
('Sudadera Naruto', 'Sudadera con diseño de Akatsuki', 34.99, 18),
('Sudadera Dragon Ball', 'Sudadera con logo de Kame House', 38.99, 15),
('Sudadera One Piece', 'Sudadera con estampado de la bandera de Luffy', 36.99, 20),
('Sudadera Attack on Titan', 'Sudadera con el escudo de la Legión de Exploración', 39.99, 12),
('Sudadera Jujutsu Kaisen', 'Sudadera con ilustraciones de Sukuna y Yuji', 35.99, 14);
-- Inserción de 5 gorras de anime
INSERT INTO producto (nombre, descripcion, precio, stock) VALUES
('Gorra Naruto', 'Gorra ajustable con símbolo de Konoha', 17.99, 25),
('Gorra Dragon Ball', 'Gorra con diseño de la esfera de cuatro estrellas', 19.99, 20),
('Gorra One Piece', 'Gorra con el logo de los Piratas del Sombrero de Paja', 18.99, 22),
('Gorra Attack on Titan', 'Gorra con estampado de los titanes', 21.99, 18),
('Gorra Jujutsu Kaisen', 'Gorra con diseño de la escuela de Tokio', 20.99, 16);
-- Inserción de 5 calcetines de anime
INSERT INTO producto (nombre, descripcion, precio, stock) VALUES
('Calcetines Naruto', 'Calcetines con diseño de Kurama', 12.99, 40),
('Calcetines Dragon Ball', 'Calcetines con estampado de Shenron', 14.99, 35),
('Calcetines One Piece', 'Calcetines con símbolos de la tripulación de Luffy', 13.99, 38),
('Calcetines Attack on Titan', 'Calcetines con el logo de la Legión de Exploración', 15.99, 30),
('Calcetines Jujutsu Kaisen', 'Calcetines con ilustraciones de los hechiceros de Jujutsu', 14.99, 32);
INSERT INTO Categoria (nombre) VALUES 
('Pantalón'), 
('Camiseta'), 
('Camisa'), 
('Sudadera'),
('Calcetines'),
('Gorro');
INSERT INTO talla (nombre) VALUES 
('XS'), 
('S'), 
('M'), 
('L'), 
('XL');
-- Pantalones de anime -> Categoría 'Pantalón'
INSERT INTO productoCategoria (idProducto, idCategoria) VALUES
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1);
-- Camisetas de anime -> Categoría 'Camiseta'
INSERT INTO productoCategoria (idProducto, idCategoria) VALUES
(6, 2), (7, 2), (8, 2), (9, 2), (10, 2);
-- Sudaderas de anime -> Categoría 'Sudadera'
INSERT INTO productoCategoria (idProducto, idCategoria) VALUES
(11, 4), (12, 4), (13, 4), (14, 4), (15, 4);
-- Gorras de anime -> Categoría 'Gorro'
INSERT INTO productoCategoria (idProducto, idCategoria) VALUES
(16, 6), (17, 6), (18, 6), (19, 6), (20, 6);
-- Calcetines de anime -> Categoría 'Calcetines'
INSERT INTO productoCategoria (idProducto, idCategoria) VALUES
(21, 5), (22, 5), (23, 5), (24, 5), (25, 5);
-- Pantalones (M, L, XL)
INSERT INTO productoTalla (idProducto, idTalla, stock) VALUES
(1, 3, 10), (1, 4, 8), (1, 5, 5),
(2, 3, 12), (2, 4, 9), (2, 5, 6),
(3, 3, 10), (3, 4, 7), (3, 5, 4),
(4, 3, 11), (4, 4, 9), (4, 5, 6),
(5, 3, 13), (5, 4, 10), (5, 5, 5);
-- Camisetas (S, M, L)
INSERT INTO productoTalla (idProducto, idTalla, stock) VALUES
(6, 2, 15), (6, 3, 20), (6, 4, 10),
(7, 2, 12), (7, 3, 18), (7, 4, 9),
(8, 2, 10), (8, 3, 17), (8, 4, 8),
(9, 2, 14), (9, 3, 19), (9, 4, 11),
(10, 2, 13), (10, 3, 18), (10, 4, 10);
-- Sudaderas (M, L, XL)
INSERT INTO productoTalla (idProducto, idTalla, stock) VALUES
(11, 3, 8), (11, 4, 6), (11, 5, 5),
(12, 3, 9), (12, 4, 7), (12, 5, 5),
(13, 3, 10), (13, 4, 8), (13, 5, 4),
(14, 3, 11), (14, 4, 9), (14, 5, 6),
(15, 3, 12), (15, 4, 10), (15, 5, 5);
-- Gorras (Única talla)
INSERT INTO productoTalla (idProducto, idTalla, stock) VALUES
(16, 2, 25), (17, 2, 20), (18, 2, 22), (19, 2, 18), (20, 2, 16);
-- Calcetines (XS, S, M, L)
INSERT INTO productoTalla (idProducto, idTalla, stock) VALUES
(21, 1, 10), (21, 2, 12), (21, 3, 15), (21, 4, 10),
(22, 1, 8), (22, 2, 10), (22, 3, 12), (22, 4, 9),
(23, 1, 11), (23, 2, 13), (23, 3, 14), (23, 4, 10),
(24, 1, 12), (24, 2, 14), (24, 3, 15), (24, 4, 11),
(25, 1, 9), (25, 2, 11), (25, 3, 12), (25, 4, 8);
-- Inserción de pedidos con diferentes usuarios
INSERT INTO pedido (precioTotal, idUsuario) VALUES
(89.97, 1), -- Pedido de Paco
(45.98, 2), -- Pedido de María
(132.99, 3), -- Pedido de Luisa
(76.99, 4), -- Pedido de Fernanda
(52.99, 5); -- Pedido de Sara
-- Inserción de productos dentro de los pedidos
INSERT INTO realizarPedido (cantidad, subtotal, idPedido, idProducto) VALUES
(1, 39.99, 1, 1), -- Pantalón Naruto para Paco
(2, 22.99, 1, 7), -- Camiseta Dragon Ball para Paco
(1, 45.99, 2, 4), -- Pantalón Attack on Titan para María
(2, 19.99, 2, 6), -- Camiseta Naruto para María
(1, 99.99, 3, 3), -- Pantalón One Piece para Luisa
(2, 16.99, 3, 17), -- Gorra One Piece para Luisa
(1, 76.99, 4, 11), -- Sudadera Naruto para Fernanda
(1, 52.99, 5, 21); -- Calcetines Naruto para Sara
