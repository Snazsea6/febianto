-- SQL untuk membuat database dan tabel Suify (Playlists only)
CREATE DATABASE IF NOT EXISTS suifydb;
USE suifydb;

CREATE TABLE IF NOT EXISTS playlists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  artist VARCHAR(100)
);