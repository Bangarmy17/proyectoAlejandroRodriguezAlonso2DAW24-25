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

INSERT INTO producto (nombre, descripcion, precio, stock, rutaImagen, idCategoria, idTalla) VALUES
('Calcetines Death Note', 'Calcetines inspirados en el anime Death Note', 9.99, 200, '/images/calcetines_deathnote.jpg', 4, 3),
('Calcetines Naruto y Sasuke', 'Calcetines con diseño de Naruto y Sasuke', 9.99, 150, '/images/calcetines_narutoYSasuke.jpg', 4, 2),
('Calcetines Uchiha', 'Calcetines con el símbolo del clan Uchiha', 9.99, 100, '/images/calcetines_uchiha.jpg', 4, 1),
('Camiseta Luffy', 'Camiseta de One Piece con diseño de Luffy', 19.99, 300, '/images/camiseta_luffy.jpg', 2, 5),
('Camiseta Megumi', 'Camiseta con estampado de Megumi de Jujutsu Kaisen', 19.99, 250, '/images/camiseta_megumi.webp', 2, 4),
('Camiseta Naruto', 'Camiseta con imagen de Naruto Uzumaki', 19.99, 350, '/images/camiseta_naruto.jpg', 2, 3),
('Camiseta Sukuna', 'Camiseta con diseño de Sukuna de Jujutsu Kaisen', 19.99, 200, '/images/camiseta_sukuna.jpg', 2, 2),
('Gorro Chopper', 'Gorro inspirado en Tony Tony Chopper de One Piece', 14.99, 100, '/images/gorro_chopper.jpg', 5, 3),
('Gorro Demon Slayer', 'Gorro con diseño basado en Kimetsu no Yaiba', 14.99, 120, '/images/gorro_demonSlayer.jpeg', 5, 2),
('Gorro Villa de la Hoja', 'Gorro con el símbolo de Konoha de Naruto', 14.99, 150, '/images/gorro_villaDeLaHoja.jpg', 5, 1),
('Pantalón Bakugo', 'Pantalón con diseño inspirado en Bakugo de My Hero Academia', 29.99, 100, '/images/pantalon_bakugo.webp', 1, 5),
('Pantalón Death Note', 'Pantalón estilo deportivo con tema de Death Note', 29.99, 150, '/images/pantalon_death.webp', 1, 4),
('Pantalón Zoro', 'Pantalón inspirado en Roronoa Zoro de One Piece', 29.99, 120, '/images/pantalon_zoro.jpg', 1, 3),
('Sudadera Harajuku', 'Sudadera estilo Harajuku con motivos japoneses', 39.99, 100, '/images/sudadera_harajuku.jpg', 3, 5),
('Sudadera Itachi', 'Sudadera con diseño de Itachi Uchiha de Naruto', 39.99, 150, '/images/sudadera_itachi.webp', 3, 4),
('Sudadera Satoru Gojo', 'Sudadera inspirada en Satoru Gojo de Jujutsu Kaisen', 39.99, 200, '/images/sudadera_satoruGojo.jpg', 3, 3);

-- DELETE FROM producto;
-- TRUNCATE TABLE producto;
