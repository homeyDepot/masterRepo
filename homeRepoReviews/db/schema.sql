DROP DATABASE IF EXISTS homeRepoReviews;

CREATE DATABASE homeRepoReviews;

USE homeRepoReviews;

CREATE TABLE reviews (id INT AUTO_INCREMENT PRIMARY KEY, reviewer VARCHAR(30), review_title VARCHAR(500), 
stars INT, date_reviewed VARCHAR(20), energy_efficiency_rating INT, quality_rating INT, value_rating INT,
review_body VARCHAR(3000), helpful INT, not_helpful INT);

INSERT INTO reviews (reviewer, review_title, stars, date_reviewed, energy_efficiency_rating, 
quality_rating, value_rating, review_body, helpful, not_helpful) VALUES ('Paul', 'The flame is not strong enough',
1,'01-DEC-2019', 2, 3, 3, 'The flame is not strong enough so takes a longer time to heat up. there was a gas leak from the very start from somewhere within the range and unfortunately the tech who came out could not fix it. 
their after sales service sucks as it takes forever to get through and their call centre is out in the philippines and it you want to speak to a manager you are directed to Panama..would not recommend this product',
6, 2);