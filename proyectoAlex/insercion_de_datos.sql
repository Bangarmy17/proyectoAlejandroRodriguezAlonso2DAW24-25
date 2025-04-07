use tiendaRopa;
INSERT INTO usuario (nombre, apellidos, direccion, email, userName, password) VALUES
('Paco','Fernandez Alonso','Casa 12','paco17@gmail.com','paquirrin17','123456789C'),
('Maria','Garcia Solis','Casa 23','mariSolis@gmail.com','mariLoqui','455323441a'),
('Luisa','Fernandez Fernandez','Calle España 67 7ºB','luisa@gmail.com','luisaShopping','Luisa777$'),
('Fernanda','Santana Falcon','Calle las Palmas 12 1º','fernan12@gmail.com','ferna12345','Fernanda12345$'),
('Sara','Alonso Garcia','Calle Bermudez de Castro 35 4º izq','saraAG@gmail.com','Sara7','Sara170678'),
('Juan','Rodriguez Fernandez','Casa 123','Juan@gmail.com','Juanico12','JuanJuanito12'),
('Pedro','Perez Busquets','Calle Cataluña 12','pedroBcn@gmail.com','PedrdoPB','27663727Q'),
('David','Garcia Suarez','Calle Ramon y Cajal 3º B','davidgs@gmail.com','davidlocotron','282837477D'),
('Fei','Xiao Pao','La corredoria alta 12','linganguli@gmail.com','chingchon12','1234567777x');

INSERT INTO producto (nombre, descripcion, precio, stock, fecha_registro) VALUES
('Camiseta Star Wars', 'Camiseta con el logo de los Sith y un diseño galáctico', 19.99, 40, NOW()),
('Sudadera Harry Potter', 'Sudadera de Hogwarts con el escudo de Gryffindor', 29.99, 25, NOW()),
('Bufanda Doctor Who', 'Bufanda multicolor inspirada en la del cuarto Doctor', 14.99, 30, NOW()),
('Pijama Pikachu', 'Pijama completo con diseño de Pikachu y detalles eléctricos', 24.99, 20, NOW()),
('Chaqueta Marvel', 'Chaqueta con logos de los Avengers, cómoda y moderna', 39.99, 15, NOW()),
('Zapatillas Zelda', 'Zapatillas decoradas con la trifuerza de The Legend of Zelda', 49.99, 18, NOW()),
('Sombrero Pokémon', 'Sombrero de Ash Ketchum, ¡perfecto para los entrenadores!', 15.99, 35, NOW()),
('Cinturón Batman', 'Cinturón estilo utilitario con el logo del Caballero Oscuro', 22.99, 10, NOW()),
('Reloj de Dragón Ball', 'Reloj de pulsera con el diseño de las esferas del dragón', 34.99, 12, NOW()),
('Bolso Totoro', 'Bolso con la adorable figura del personaje Totoro', 25.99, 20, NOW());
