CREATE DATABASE mercadohoy;

USE mercadohoy;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    tamano VARCHAR(50),
    precio DECIMAL(10,2) NOT NULL,
    supermercado VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);