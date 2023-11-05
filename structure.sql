#### CREACIÓN DE BASE DE DATOS ######
DROP DATABASE IF EXISTS river_shopping;
CREATE SCHEMA river_shopping;

#### CREACIÓN DE TABLAS ####

CREATE TABLE `river_shopping`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NULL,
  PRIMARY KEY (`id_user`));
  
  
  
#### CREACIÓN DE TABLAS RELACIONALES ####

-- Tabla para categorías
CREATE TABLE `river_shopping`.`category` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_category`));

-- Tabla para colores
CREATE TABLE `river_shopping`.`color` (
  `id_color` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL UNIQUE,
  PRIMARY KEY (`id_color`));

-- Tabla para tallas/tamaños
CREATE TABLE `river_shopping`.`size` (
  `id_size` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id_size`));

-- Tabla para marcas
CREATE TABLE `river_shopping`.`brand` (
  `id_brand` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_brand`));


CREATE TABLE `river_shopping`.`product` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `name_product` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` REAL NOT NULL,
  `stock` INTEGER NOT NULL,
  `image` VARCHAR(255) NULL,
  `id_category` INT NOT NULL,
  `id_color` INT NOT NULL,
  `id_size` INT NOT NULL,
  `id_brand` INT NOT NULL,
  PRIMARY KEY (`id_product`),
  FOREIGN KEY (`id_category`) REFERENCES `category`(`id_category`),
  FOREIGN KEY (`id_color`) REFERENCES `color`(`id_color`),
  FOREIGN KEY (`id_size`) REFERENCES `size`(`id_size`),
  FOREIGN KEY (`id_brand`) REFERENCES `brand`(`id_brand`));
  
  #### TABLA PARA EL CARRITO DE COMPRAS ####

CREATE TABLE `river_shopping`.`cart` (
  `id_cart` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `total_price` REAL NOT NULL,
  `purchase_date` DATE NOT NULL,
  PRIMARY KEY (`id_cart`),
  FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`));

#### TABLA PARA LOS DETALLES DEL CARRITO ####

CREATE TABLE `river_shopping`.`cart_detail` (
  `id_cart_detail` INT NOT NULL AUTO_INCREMENT,
  `id_cart` INT NOT NULL,
  `id_product` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price_at_purchase` REAL NOT NULL,
  PRIMARY KEY (`id_cart_detail`),
  FOREIGN KEY (`id_cart`) REFERENCES `cart`(`id_cart`),
  FOREIGN KEY (`id_product`) REFERENCES `product`(`id_product`));




