CREATE DATABASE tiendaRopa;
USE tiendaRopa;

CREATE TABLE usuario (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(45) NOT NULL,
apellidos VARCHAR(100) NOT NULL,
email VARCHAR(45) NOT NULL,
direccion TEXT,
userName VARCHAR(45) NOT NULL,
password VARCHAR(100) NOT NULL,
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
enabled TINYINT NOT NULL DEFAULT 1
-- enabled me va a servir para escoger si un usuario va a ser admin o no 
);
-- TABLA PARA ROLES (Usuario o Admin)
CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(45) NOT NULL UNIQUE
);
-- Relacion de muchos a muchos entre usuario y rol
CREATE TABLE user_roles(
user_id INT,
role_id INT,
PRIMARY KEY (user_id, role_id),
FOREIGN KEY (user_id) REFERENCES usuario(id) ON DELETE CASCADE,
FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);
-- Inserción de registros en la tabla roles
INSERT INTO roles (name) VALUES ('ROLE_ADMIN'), ('ROLE_USER');
-- Tabla para categorías
CREATE TABLE categoria (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(45) NOT NULL
);
-- Tabla para tallas
CREATE TABLE talla (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(10) NOT NULL
);
-- Tabla para donde se guarden los productos
CREATE TABLE producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    rutaImagen VARCHAR(255),
    idCategoria INT NOT NULL,
    idTalla INT NOT NULL,
    FOREIGN KEY (idCategoria) REFERENCES categoria(id) ON DELETE CASCADE,
    FOREIGN KEY (idTalla) REFERENCES talla(id) ON DELETE CASCADE
);

-- tabla donde guardará el usuario los productos para luego procesar el pedido
CREATE TABLE carrito (
id INT AUTO_INCREMENT PRIMARY KEY,
idUsuario INT NOT NULL,
idProducto INT NOT NULL,
cantidad INT NOT NULL DEFAULT 1,
fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES usuario(id) ON DELETE CASCADE,
FOREIGN KEY (idProducto) REFERENCES producto(id) ON DELETE CASCADE
);

CREATE TABLE pedido (
id INT AUTO_INCREMENT PRIMARY KEY,
precioTotal DECIMAL(10,2),
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
idUsuario INT NOT NULL,
FOREIGN KEY (idUsuario) REFERENCES usuario(id) ON DELETE CASCADE
);
-- 
CREATE TABLE realizarPedido(
id INT AUTO_INCREMENT PRIMARY KEY,
cantidad INT NOT NULL,
subtotal DECIMAL(10,2) NOT NULL,
idPedido INT NOT NULL,
idProducto INT NOT NULL,
FOREIGN KEY (idPedido) REFERENCES pedido(id) ON DELETE CASCADE,
FOREIGN KEY (idProducto) REFERENCES producto(id) ON DELETE CASCADE
);
-- DROP database tiendaRopa;