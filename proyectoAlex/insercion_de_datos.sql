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

INSERT INTO producto (nombre, descripcion, precio, stock, rutaImagen) VALUES
('Calcetines Death Note', 'Calcetines del aclamado anime DEATH NOTE', 9.99,10,'uploads/calcetines_deathnote.jpg');
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
