-- CREATE DATABASE testfresher;
-- table Products
INSERT INTO Products (name, description, price, image) VALUES('Product 1', 'Description for Product 1', 100, 'image1.jpg');
INSERT INTO Products (name, description, price, image) VALUES('Product 2', 'Description for Product 2', 200, 'image2.jpg');
INSERT INTO Products (name, description, price, image) VALUES('Product 3', 'Description for Product 3', 300, 'image3.jpg');

-- table Roles
INSERT INTO Roles (code, value) VALUES('R1', 'Admin');
INSERT INTO Roles (code, value) VALUES('R2', 'Moderator');
INSERT INTO Roles (code, value) VALUES('R3', 'User');

-- table Users
INSERT INTO Users (name, email, password, role_code, avatar) VALUES('minhhung', 'minhhung@gmail.com', '123456', 'R1', '');
INSERT INTO Users (name, email, password, role_code, avatar) VALUES('tranhuyen', 'tranhuyen@gmail.com', '123456', 'R2', '');
INSERT INTO Users (name, email, password, role_code, avatar) VALUES('9135', '9135@gmail.com', '123456', 'R3', '');
