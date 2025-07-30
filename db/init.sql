CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

INSERT INTO users (name, email) VALUES
 ('Alwi', 'alwi@gmail.com'),
 ('Budi', 'budi@gmail.com'),
 ('Citra', 'citra@gmail.com');
