use tiendaRopa;
INSERT INTO usuario (nombre, apellidos, direccion, email, userName, password) VALUES
('Admin', 'Admin Admin', 'Casa del Admin', 'admin@gmail.com', 'adminmaster', '123456'),
('Usuario', 'Usuario Comun', 'Casa del Usuario', 'usuario@gmail.com', 'usuario123', '123456');
INSERT INTO user_roles (user_id, role_id) VALUES 
(1, 1), -- ROL ADMIN
(2, 2); -- ROL USER
UPDATE usuario SET password = '$2a$10$..6o7e73cchr4Q.l2T2FBuHVwk4quv24PAV4BMG80zrGZfoP7KxJO'; 
-- les puse una contraseña con bccrypt para poder hacer pruebas en postman
-- la contraseña normal es 123456
INSERT INTO producto (nombre, descripcion, precio, stock, rutaImagen) VALUES
('Calcetines Death Note', 'Calcetines inspirados en el anime Death Note', 9.99, 20, '/images/calcetines_deathnote.jpg'),
('Calcetines Naruto y Sasuke', 'Calcetines con diseño de Naruto y Sasuke', 9.99, 15, '/images/calcetines_narutoYSasuke.jpg'),
('Calcetines Uchiha', 'Calcetines con el símbolo del clan Uchiha', 9.99, 10, '/images/calcetines_uchiha.jpg'),
('Camiseta Luffy', 'Camiseta de One Piece con diseño de Luffy', 19.99, 30, '/images/camiseta_luffy.jpg'),
('Camiseta Megumi', 'Camiseta con estampado de Megumi de Jujutsu Kaisen', 19.99, 25, '/images/camiseta_megumi.webp'),
('Camiseta Naruto', 'Camiseta con imagen de Naruto Uzumaki', 19.99, 35, '/images/camiseta_naruto.jpg'),
('Camiseta Sukuna', 'Camiseta con diseño de Sukuna de Jujutsu Kaisen', 19.99, 20, '/images/camiseta_sukuna.jpg'),
('Gorro Chopper', 'Gorro inspirado en Tony Tony Chopper de One Piece', 14.99, 10, '/images/gorro_chopper.jpg'),
('Gorro Demon Slayer', 'Gorro con diseño basado en Kimetsu no Yaiba', 14.99, 12, '/images/gorro_demonSlayer.jpeg'),
('Gorro Villa de la Hoja', 'Gorro con el símbolo de Konoha de Naruto', 14.99, 15, '/images/gorro_villaDeLaHoja.jpg'),
('Pantalón Bakugo', 'Pantalón con diseño inspirado en Bakugo de My Hero Academia', 29.99, 10, '/images/pantalon_bakugo.webp'),
('Pantalón Death Note', 'Pantalón estilo deportivo con tema de Death Note', 29.99, 15, '/images/pantalon_death.webp'),
('Pantalón Zoro', 'Pantalón inspirado en Roronoa Zoro de One Piece', 29.99, 12, '/images/pantalon_zoro.jpg'),
('Sudadera Harajuku', 'Sudadera estilo Harajuku con motivos japoneses', 39.99, 10, '/images/sudadera_harajuku.jpg'),
('Sudadera Itachi', 'Sudadera con diseño de Itachi Uchiha de Naruto', 39.99, 15, '/images/sudadera_itachi.webp'),
('Sudadera Satoru Gojo', 'Sudadera inspirada en Satoru Gojo de Jujutsu Kaisen', 39.99, 20, '/images/sudadera_satoruGojo.jpg');
INSERT INTO Categoria (nombre) VALUES 
('Pantalón'), 
('Camiseta'), 
('Sudadera'),
('Calcetines'),
('Gorro');
INSERT INTO talla (nombre) VALUES 
('XS'), 
('S'), 
('M'), 
('L'), 
('XL');

INSERT INTO productoCategoria (idProducto, idCategoria) VALUES
(1, 4),
(2, 4),
(3, 4),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 5),
(9, 5),
(10, 5),
(11, 1),
(12, 1),
(13, 1),
(14, 3),
(15, 3),
(16, 3);


-- DELETE FROM producto;
-- TRUNCATE TABLE producto;
