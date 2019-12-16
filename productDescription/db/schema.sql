CREATE DATABASE
IF NOT EXISTS products_list;

USE products_list;

CREATE TABLE
IF NOT EXISTS products_list.product
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name TEXT,
	designer VARCHAR (25),
	descriptions TEXT,
	price DECIMAl (19,2),
    skuid INT
);


INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Titian Pine and Painted MDF Antique Tobacco Console Table",
		"Linon Home Decor",
		"Our Titian Collection has a simple yet eye-catching design that is matched with incredible durability.| The Console Table features a compact and simple body that makes it perfect for any space.| 2-Drawers provide ample hidden storage space. A neutral, classic Antique Tobacco finish allows this piece to easily complement your homes decor.|
Simple yet eye-catching design|
Versatile design|
2-drawers provide ample storage space|
Will easily complement your homes decor|
Drawer dimensions: 34.65 in. x 8.82 in. x 1.97 in., top: 42 in. x 14 in.,| interior dimensions: 36.61 in. x 12.6 in. x 18.66 in.|
Antique tobacco finish|
Distance from Floor to Lower Shelf: 4.375 in.|
California residents",
		112.69,1001);
INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Finwick Gunmetal Gray Metal Square Dining Table for 4 (31.5 in. L x 29.13 in. H)",
		"iRobot",
		"The Roomba 960 robot vacuum seamlessly navigates room to room to clean an entire level of your home, recharging and resuming until the job is done. Roomba 960 loosens, lifts, and suctions dirt with up to 5x more air power and requires less maintenance. Just press CLEAN or schedule Roomba on the go with the iRobot HOME App.|

Power-Lifting Suction delivers 5X the air power for improved pick-up performance. (Compared to Roomba 600 Series)|
Intelligently maps and cleans an entire level of your home.| Patented iAdapt 2.0 technology with vSLAM navigation actively captures thousands of precise measurements each millisecond to optimize coverage.|
Ideal for homes with pets. |",
		111.29,1002)







