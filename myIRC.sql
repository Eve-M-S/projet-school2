DROP DATABASE IF EXISTS myIRC;
CREATE DATABASE IF NOT EXISTS myIRC;
USE myIRC;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pseudo varchar(50) NOT NULL,
  mdp VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user (pseudo, mdp, email) VALUES
('Eve', 'Sidibé','e.sidibe@gmail.com');

CREATE TABLE `chanel` (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  chanel_name varchar(50) NOT NULL,
  chanel_type varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `message` (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_user int(11) REFERENCES user(id),
  id_chanel int(11) REFERENCES chanel(id),
  message_contenu varchar(16383) NOT NULL,
  message_date date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- // 
