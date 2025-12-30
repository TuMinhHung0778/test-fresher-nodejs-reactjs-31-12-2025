-- CREATE DATABASE testfresher;
-- table Categories
INSERT INTO Categories (name) VALUES ('Phone');
INSERT INTO Categories (name) VALUES ('Laptop');
INSERT INTO Categories (name) VALUES ('Accessory');

-- table Products
INSERT INTO Products (name, description, price, image, categoryId)
VALUES ('iPhone 15 Pro', 'Apple phone', 1200, 'iphone.jpg', 1);

INSERT INTO Products (name, description, price, image, categoryId)
VALUES ('Samsung S24', 'Samsung phone', 900, 'samsung.jpg', 1);

INSERT INTO Products (name, description, price, image, categoryId)
VALUES ('Macbook Pro M3', 'Apple laptop', 2500, 'macbook.jpg', 2);

INSERT INTO Products (name, description, price, image, categoryId)
VALUES ('Mouse Logitech', 'Wireless mouse', 50, 'mouse.jpg', 3);


-- table Roles
INSERT INTO Roles (code, value) VALUES ('R1', 'Admin');
INSERT INTO Roles (code, value) VALUES ('R2', 'Moderator');
INSERT INTO Roles (code, value) VALUES ('R3', 'User');

-- table Users
INSERT INTO Users (name, email, password, role_code, avatar) VALUES('minhhung', 'minhhung@gmail.com', '123456', 'R1', '');
INSERT INTO Users (name, email, password, role_code, avatar) VALUES('tranhuyen', 'tranhuyen@gmail.com', '123456', 'R2', '');
INSERT INTO Users (name, email, password, role_code, avatar) VALUES('9135', '9135@gmail.com', '123456', 'R3', '');
