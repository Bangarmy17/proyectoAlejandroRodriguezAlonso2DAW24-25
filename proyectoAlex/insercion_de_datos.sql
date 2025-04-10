use tiendaRopa;
INSERT INTO Usuario (nombre, apellidos, direccion, email, userName, password, idRol) VALUES
('Paco', 'Fernandez Alonso', 'Casa 12', 'paco17@gmail.com', 'paquirrin17', '123456789C', 2),
('Maria', 'Garcia Solis', 'Casa 23', 'mariSolis@gmail.com', 'mariLoqui', '455323441a', 2),
('Luisa', 'Fernandez Fernandez', 'Calle España 67 7ºB', 'luisa@gmail.com', 'luisaShopping', 'Luisa777$', 2),
('Fernanda', 'Santana Falcon', 'Calle las Palmas 12 1º', 'fernan12@gmail.com', 'ferna12345', 'Fernanda12345$', 2),
('Sara', 'Alonso Garcia', 'Calle Bermudez de Castro 35 4º izq', 'saraAG@gmail.com', 'Sara7', 'Sara170678', 2),
('Juan', 'Rodriguez Fernandez', 'Casa 123', 'Juan@gmail.com', 'Juanico12', 'JuanJuanito12', 2),
('Pedro', 'Perez Busquets', 'Calle Cataluña 12', 'pedroBcn@gmail.com', 'PedrdoPB', '27663727Q', 2),
('David', 'Garcia Suarez', 'Calle Ramon y Cajal 3º B', 'davidgs@gmail.com', 'davidlocotron', '282837477D', 2),
('Fei', 'Xiao Pao', 'La corredoria alta 12', 'linganguli@gmail.com', 'chingchon12', '1234567777x', 2);

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

INSERT INTO Producto (nombre, descripcion, precio, stock, fecha_registro) VALUES
('Camiseta Iron Man', 'Camiseta roja con el reactor Arc de Iron Man.', 25.99, 20, NOW()),
('Sudadera Spider-Man', 'Sudadera azul y roja con el emblema de Spider-Man.', 30.99, 25, NOW()),
('Mochila Yoda', 'Mochila estilo Baby Yoda, perfecta para el día a día.', 39.99, 18, NOW()),
('Pijama Darth Vader', 'Pijama negro inspirado en el traje de Darth Vader.', 27.99, 15, NOW()),
('Reloj Goku', 'Reloj con diseño de Goku y las esferas del dragón.', 19.99, 30, NOW()),
('Bufanda Gryffindor', 'Bufanda con los colores de Gryffindor (Harry Potter).', 15.99, 20, NOW()),
('Guantes Capitán América', 'Guantes con el escudo de Capitán América.', 12.99, 40, NOW()),
('Zapatillas Hogwarts', 'Zapatillas con el escudo de Hogwarts bordado.', 42.99, 12, NOW()),
('Sombrero Pikachu', 'Sombrero amarillo con las orejas de Pikachu.', 18.99, 35, NOW()),
('Bolso Totoro', 'Bolso gris con el diseño de Totoro, muy espacioso.', 29.99, 25, NOW()),
('Llavero Trifuerza', 'Llavero dorado con el emblema de la trifuerza.', 9.99, 50, NOW()),
('Camiseta Mario Bros', 'Camiseta roja con el logo de Mario y Luigi.', 22.99, 30, NOW()),
('Almohada Sonic', 'Almohada azul con el rostro de Sonic.', 17.99, 20, NOW()),
('Sudadera Loki', 'Sudadera verde y dorada con el emblema de Loki.', 35.99, 15, NOW()),
('Chaqueta Batman', 'Chaqueta negra con el logo del Caballero Oscuro.', 48.99, 10, NOW()),
('Pijama Bulbasaur', 'Pijama verde inspirado en Bulbasaur.', 28.99, 25, NOW()),
('Camiseta Superman', 'Camiseta azul con el clásico logo de Superman.', 24.99, 20, NOW()),
('Taza Thor', 'Taza con el martillo Mjolnir estampado.', 12.99, 50, NOW()),
('Figura Funko Rick', 'Figura Funko Pop de Rick (Rick and Morty).', 19.99, 15, NOW()),
('Cuaderno Death Note', 'Cuaderno con el diseño de la Death Note.', 14.99, 35, NOW()),
('Pendientes Zelda', 'Pendientes dorados con símbolos de Zelda.', 11.99, 20, NOW()),
('Zapatillas Flash', 'Zapatillas rojas con el emblema del rayo de Flash.', 39.99, 15, NOW()),
('Camiseta Wonder Woman', 'Camiseta blanca con el logo de Wonder Woman.', 26.99, 20, NOW()),
('Sudadera Hulk', 'Sudadera verde con el diseño de Hulk Smash.', 32.99, 18, NOW()),
('Bolso Eevee', 'Bolso marrón con el diseño de Eevee.', 25.99, 30, NOW()),
('Pijama Chewbacca', 'Pijama inspirado en el pelaje de Chewbacca.', 29.99, 12, NOW()),
('Alfombra Groot', 'Alfombra con la frase “I am Groot”.', 35.99, 15, NOW()),
('Peluche Kirby', 'Peluche rosa de Kirby, ideal para regalar.', 18.99, 40, NOW()),
('Reloj Zelda', 'Reloj con el logo de la trifuerza estampado.', 27.99, 10, NOW());

INSERT INTO Producto (nombre, descripcion, precio, stock, fecha_registro) VALUES
('Camiseta AC/DC', 'Camiseta negra con el icónico logo de AC/DC.', 20.99, 50, NOW()),
('Camiseta Metallica', 'Camiseta con el diseño del álbum “Master of Puppets”.', 25.99, 40, NOW()),
('Camiseta Nirvana', 'Camiseta amarilla con el clásico logo smiley de Nirvana.', 19.99, 60, NOW()),
('Camiseta Pink Floyd', 'Camiseta con el diseño de la portada de “The Dark Side of the Moon”.', 22.99, 50, NOW()),
('Camiseta Queen', 'Camiseta con el logo y la corona de la banda Queen.', 21.99, 45, NOW()),
('Camiseta Led Zeppelin', 'Camiseta con el diseño de su álbum “Led Zeppelin IV”.', 23.99, 35, NOW()),
('Camiseta Guns N\' Roses', 'Camiseta con el emblemático logo de Guns N\' Roses.', 26.99, 40, NOW()),
('Camiseta Foo Fighters', 'Camiseta con el logo minimalista de Foo Fighters.', 19.99, 50, NOW()),
('Camiseta The Rolling Stones', 'Camiseta negra con el icónico logo de la lengua.', 24.99, 30, NOW()),
('Camiseta Pearl Jam', 'Camiseta con el diseño inspirado en el álbum “Ten”.', 22.99, 25, NOW()),
('Camiseta The Beatles', 'Camiseta con el diseño de la portada de “Abbey Road”.', 19.99, 40, NOW()),
('Camiseta Ramones', 'Camiseta con el logo clásico de los Ramones.', 18.99, 45, NOW()),
('Camiseta Iron Maiden', 'Camiseta con Eddie, la mascota de Iron Maiden.', 25.99, 20, NOW()),
('Camiseta Green Day', 'Camiseta con el diseño de “American Idiot”.', 20.99, 50, NOW()),
('Camiseta Arctic Monkeys', 'Camiseta con el diseño de la portada de “AM”.', 21.99, 35, NOW()),
('Camiseta Muse', 'Camiseta con el logo de Muse y un diseño galáctico.', 24.99, 30, NOW()),
('Camiseta The Strokes', 'Camiseta con el logo de la banda The Strokes.', 23.99, 25, NOW()),
('Camiseta U2', 'Camiseta con el diseño del álbum “Joshua Tree”.', 22.99, 50, NOW()),
('Camiseta Red Hot Chili Peppers', 'Camiseta con el icónico logo de la banda.', 21.99, 40, NOW()),
('Camiseta Black Sabbath', 'Camiseta con un diseño inspirado en el álbum “Paranoid”.', 26.99, 20, NOW());


-- Pedido de Paco: Compra de 2 camisetas Star Wars y 1 sudadera Harry Potter
INSERT INTO pedido (precioTotal, fecha_registro, idUsuario) VALUES (69.97, NOW(), 1);
INSERT INTO realizarpedido (cantidad, subtotal, idPedido, idProducto) VALUES 
(2, 39.98, 1, 1), 
(1, 29.99, 1, 2);

-- Pedido de María: Compra de 3 bufandas Doctor Who
INSERT INTO pedido (precioTotal, fecha_registro, idUsuario) VALUES (44.97, NOW(), 2);
INSERT INTO realizarpedido (cantidad, subtotal, idPedido, idProducto) VALUES 
(3, 44.97, 2, 3);

-- Pedido de Luisa: Compra de 1 pijama Pikachu y 2 chaquetas Marvel
INSERT INTO pedido (precioTotal, fecha_registro, idUsuario) VALUES (104.97, NOW(), 3);
INSERT INTO realizarpedido (cantidad, subtotal, idPedido, idProducto) VALUES 
(1, 24.99, 3, 4), 
(2, 79.98, 3, 5);

-- Pedido de Fernanda: Compra de 1 sombrero Pokémon y 1 reloj de Dragón Ball
INSERT INTO pedido (precioTotal, fecha_registro, idUsuario) VALUES (50.98, NOW(), 4);
INSERT INTO realizarpedido (cantidad, subtotal, idPedido, idProducto) VALUES 
(1, 15.99, 4, 7), 
(1, 34.99, 4, 9);

-- Pedido de Sara: Compra de 2 bolsos Totoro
INSERT INTO pedido (precioTotal, fecha_registro, idUsuario) VALUES (51.98, NOW(), 5);
INSERT INTO realizarpedido (cantidad, subtotal, idPedido, idProducto) VALUES 
(2, 51.98, 5, 10);

