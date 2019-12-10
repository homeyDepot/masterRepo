CREATE DATABASE
IF NOT EXISTS products_list;

USE products_list;

CREATE TABLE
IF NOT EXISTS products_list.product
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name TEXT,
	designer VARCHAR
(10),
	descriptions TEXT,
	price DECIMAl
(19,2)
	
);
select FORMAT(price,2) from product;

INSERT INTO product
	(name, designer,descriptions,price)
VALUES
	("Ronin 4-Piece Espresso Bar Table Set",
		"Safavieh",
		"4 piece pub set allows for convenient dining.|
		Versatile piece allows for this set to flourish in any setting.|
		Functional décor ideal for dining or living room", 
		216.28);
INSERT INTO product
	(name, designer,descriptions,price)
VALUES
	("Finwick Gunmetal Gray Metal Square Dining Table for 4 (31.5 in. L x 29.13 in. H)", 
	"StyleWell", 
	"Square dining table.|
	Farmhouse-style metal base with wood tabletop.|
	Product Dimensions: 31.5 in W x 31.5 in L x 29.13 in H.", 
	111.29)







