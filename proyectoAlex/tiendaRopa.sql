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
CREATE TABLE rol (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL UNIQUE
);
-- Relacion de muchos a muchos entre usuario y rol
CREATE TABLE user_roles(
user_id INT,
role_id INT,
PRIMARY KEY (user_id, role_id),
FOREIGN KEY (user_id) REFERENCES usuario(id) ON DELETE CASCADE,
FOREIGN KEY (role_id) REFERENCES rol(id) ON DELETE CASCADE
);
-- Inserción de registros en la tabla roles
INSERT INTO rol (name) VALUES ('ROLE_ADMIN'), ('ROLE_USER');

-- Tabla para donde se guarden los productos
CREATE TABLE producto (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(45) NOT NULL,
descripcion TEXT,
precio DECIMAL(10,2) NOT NULL,
stock INT NOT NULL,
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 
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
-- Relación muchos a muchos entre Producto y Categoria
CREATE TABLE productoCategoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProducto INT NOT NULL,
    idCategoria INT NOT NULL,
    FOREIGN KEY (idProducto) REFERENCES producto(id) ON DELETE CASCADE,
    FOREIGN KEY (idCategoria) REFERENCES categoria(id) ON DELETE CASCADE
);
-- Relación muchos a muchos entre Producto y Talla
CREATE TABLE productoTalla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProducto INT NOT NULL,
    idTalla INT NOT NULL,
    stock INT NOT NULL, -- Stock específico por talla
    FOREIGN KEY (idProducto) REFERENCES producto(id) ON DELETE CASCADE,
    FOREIGN KEY (idTalla) REFERENCES talla(id) ON DELETE CASCADE
);

-- DROP database tiendaRopa;