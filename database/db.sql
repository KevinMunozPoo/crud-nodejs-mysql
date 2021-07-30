-- Creating the database:
CREATE DATABASE crud_nodejs_mysql;

-- Using the database:
USE crud_nodejs_mysql;

-- Creating a table:
CREATE TABLE customers (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- To show all tables:
SHOW TABLES;

-- To describe the table:
DESCRIBE customer;
