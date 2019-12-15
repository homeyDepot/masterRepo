DROP DATABASE IF EXISTS item_list;

CREATE DATABASE item_list;

USE item_list;


CREATE TABLE products(
    id INT AUTO_INCREMENT,
    name text,
    price DECIMAL(19, 2) NOT NULL,
    description TEXT,
    PRIMARY Key (id),
    img TEXT
)