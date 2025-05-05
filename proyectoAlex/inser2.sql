use tiendaRopa;
-- Inserción de 10 usuarios
INSERT INTO usuario (nombre, apellidos, email, direccion, userName, password, enabled) VALUES
('Juan', 'Pérez', 'juan@example.com', 'Calle 123', 'juanp', '123456', 1),
('Ana', 'García', 'ana@example.com', 'Avenida 456', 'anag', 'abcdef', 1),
('Carlos', 'Fernández', 'carlos@example.com', 'Plaza 789', 'carlosf', 'pass123', 1),
('Lucía', 'Martínez', 'lucia@example.com', 'Calle 101', 'luciam', 'luciaPass', 1),
('Pedro', 'Gómez', 'pedro@example.com', 'Avenida 202', 'pedrog', 'pedroPass', 1),
('Sofía', 'López', 'sofia@example.com', 'Calle 303', 'sofial', 'sofiaPass', 1),
('Miguel', 'Ruiz', 'miguel@example.com', 'Plaza 404', 'miguelr', 'miguelPass', 1),
('Elena', 'Díaz', 'elena@example.com', 'Avenida 505', 'elenad', 'elenaPass', 1),
('David', 'Hernández', 'david@example.com', 'Calle 606', 'davidh', 'davidPass', 1),
('Paula', 'Sánchez', 'paula@example.com', 'Plaza 707', 'paulas', 'paulaPass', 1);

-- Inserción de 20 productos
INSERT INTO producto (nombre, descripcion, precio, stock) VALUES
('Camiseta', 'Camiseta de algodón', 15.99, 50),
('Pantalón', 'Pantalón de mezclilla', 29.99, 40),
('Chaqueta', 'Chaqueta de cuero', 99.99, 15),
('Vestido', 'Vestido elegante', 49.99, 20),
('Sudadera', 'Sudadera con capucha', 35.99, 30),
('Zapatos deportivos', 'Zapatos para correr', 59.99, 25),
('Gorra', 'Gorra ajustable', 12.99, 60),
('Bufanda', 'Bufanda de lana', 18.99, 35),
('Guantes', 'Guantes térmicos', 14.99, 40),
('Bolso', 'Bolso de piel', 79.99, 10),
('Jeans', 'Jeans cómodos', 39.99, 25),
('Sombrero', 'Sombrero de verano', 19.99, 15),
('Sandalias', 'Sandalias de playa', 22.99, 20),
('Corbata', 'Corbata elegante', 29.99, 10),
('Parka', 'Abrigo impermeable', 119.99, 5),
('Botas', 'Botas de montaña', 89.99, 8),
('Camisa', 'Camisa de vestir', 44.99, 30),
('Chaleco', 'Chaleco acolchado', 39.99, 12),
('Calcetines', 'Calcetines de algodón', 9.99, 100),
('Reloj', 'Reloj de pulsera', 199.99, 5);

-- Inserción de 5 pedidos
INSERT INTO pedido (precioTotal, idUsuario) VALUES
(59.99, 1),
(99.99, 2),
(39.99, 3),
(22.99, 4),
(199.99, 5);

-- Inserción de categorías
INSERT INTO categoria (nombre) VALUES ('Ropa'), ('Calzado'), ('Accesorios');

-- Inserción de tallas
INSERT INTO talla (nombre) VALUES ('XS'), ('S'), ('M'), ('L'), ('XL');

-- Asociación de productos con categorías
INSERT INTO productoCategoria (idProducto, idCategoria) VALUES
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1),
(6, 2), (7, 3), (8, 3), (9, 3), (10, 3),
(11, 1), (12, 3), (13, 2), (14, 3), (15, 1),
(16, 2), (17, 1), (18, 1), (19, 3), (20, 3);

-- Asociación de productos con tallas y stock específico
INSERT INTO productoTalla (idProducto, idTalla, stock) VALUES
(1, 2, 15), (1, 3, 20), (1, 4, 10),
(2, 3, 15), (2, 4, 10), (2, 5, 5),
(3, 3, 8), (3, 4, 5), (3, 5, 2),
(4, 2, 12), (4, 3, 10), (4, 4, 5),
(5, 3, 20), (5, 4, 10), (5, 5, 5);

-- DROP database tiendaRopa;