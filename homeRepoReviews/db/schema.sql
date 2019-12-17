DROP DATABASE IF EXISTS homeRepoReviews;

CREATE DATABASE homeRepoReviews;

USE homeRepoReviews;

CREATE TABLE reviews (id INT AUTO_INCREMENT PRIMARY KEY, reviewer VARCHAR(30), review_title VARCHAR(500), 
stars INT, date_reviewed VARCHAR(20),review_body VARCHAR(3000), helpful INT, not_helpful INT, totalStars INT, 
SKUID INT);