CREATE DATABASE IF NOT EXISTS SearchByTaste;
USE SearchByTaste;
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Favorites CASCADE;
DROP TABLE IF EXISTS Preclude CASCADE;

CREATE TABLE Users(
 user_id INTEGER AUTO_INCREMENT,
 user_name VARCHAR(100),
 email VARCHAR(100),
 creation_date DATE,
 password VARCHAR(100) NOT NULL,
 PRIMARY KEY (user_id)
 );

CREATE TABLE Favorites(
 recipe_id INTEGER NOT NULL,
 name VARCHAR(100),
 date DATE,
 user_id INTEGER NOT NULL,
 PRIMARY KEY (albums_id),
 FOREIGN KEY (user_id)
 REFERENCES Users(user_id)
); 

CREATE TABLE Preclude(
 ingredient_id INTEGER NOT NULL,
 ingredient_name VARCHAR(100),
 date DATE,
 user_id INTEGER NOT NULL,
 PRIMARY KEY (ingredient_id),
 FOREIGN KEY (user_id)
 REFERENCES Users(user_id)
); 
