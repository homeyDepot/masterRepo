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
select FORMAT(price,2)
from product;

INSERT INTO product
	(name, designer,descriptions,price)
VALUES
	("Ronin 4-Piece Espresso Bar Table Set",
		"Safavieh",
		"4 piece pub set allows for convenient dining.|
		Versatile piece allows for this set to flourish in any setting.|
		Functional décor ideal for dining or living room.|
		The transitional Ronin 4-piece pub table set is the ideal addition to kitchen, studio apartment, family room or entertainment room. Crafted from sturdy Malaysian oak with rich dark espresso finish, it features a table, two low profile barstools and coordinating bench. As a bonus, use it for extra counter space for service during buffets and parties.|
Crafted with Malaysian Oak|
Finished In Espresso|
Minor assembly required|
Table Dimensions: 24 in. W x 44 in. D x 36 in. H|
Bench Dimensions: 33 in. W x 13.2 in. D x 24 in. H|
Counter Stool Dimensions: 17.7 in. W x 14.5 in. D x 24 in. H|
Seat Dimensions: 33 in. W x 9.5 in. D x 24 in. H|
Table Footrest Height: 8.3 in. H|
Chair Footrest Height: 4.3 in. H|
Table Weight Capacity: 50 lbs.|
Bench Weight Capacity: 500 lbs.|
Chair Weight Capacity: 275 lbs.|
Use felt pads under all articles to prevent discoloration|
Dust regularly, clean with non- abrasive clean cloth|
Can be spot cleaned but professional cleaning is strongly recommended|
Wood is a natural material with variations of color shade, configuration, streaks, and grain structure, each individual piece of Safavieh furniture has characteristic markings that will differ from photo and showroom samples, regular attention and maintenance of fine furniture can ensure its beauty for years to come, always use felt pads under all articles to prevent discoloration or softening of the lacquer, plastic and rubber bases on items can discolor wood|
60 day Manufacturer Warranty for defects only. Normal wear and tear is not warranted. Visible damages not noted upon delivery will be determined to be customer damage and will not be warranted. Returned items must be in new or unused conditions with the original manufacturers packaging. All products are inspected upon arrival and we do not accept worn, dirty or stained merchandise.|
Please note: the digital images and product dimensions on our website are as accurate as possible, due to differences in computer monitors, some furniture colors may vary slightly, lengths and widths may vary from the published dimensions, we do our best to provide you with an exact measurement, but please be advised that some variation exists",
		216.28);
INSERT INTO product
	(name, designer,descriptions,price)
VALUES
	("Finwick Gunmetal Gray Metal Square Dining Table for 4 (31.5 in. L x 29.13 in. H)",
		"StyleWell",
		"Square dining table.|
	Farmhouse-style metal base with wood tabletop.|
	Product Dimensions: 31.5 in W x 31.5 in L x 29.13 in H.|
	|",
		111.29)







