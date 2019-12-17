CREATE DATABASE
IF NOT EXISTS products_list;

USE products_list;

CREATE TABLE
IF NOT EXISTS products_list.product
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name TEXT,
	designer VARCHAR
(25),
	descriptions TEXT,
	price DECIMAl
(19,2),
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
		112.69, 1001);
INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Roomba 960 Wi-Fi Connected Robot Vacuum)",
		"iRobot",
		"The Roomba 960 robot vacuum seamlessly navigates room to room to clean an entire level of your home, recharging and resuming until the job is done. Roomba 960 loosens, lifts, and suctions dirt with up to 5x more air power and requires less maintenance. Just press CLEAN or schedule Roomba on the go with the iRobot HOME App.|

Power-Lifting Suction delivers 5X the air power for improved pick-up performance. (Compared to Roomba 600 Series)|
Intelligently maps and cleans an entire level of your home.| Patented iAdapt 2.0 technology with vSLAM navigation actively captures thousands of precise measurements each millisecond to optimize coverage.|
Ideal for homes with pets. |",
		449.99, 1002);

INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Home Mini Chalk)",
		"Loogle",
		"Control your smart home with just a few words|
Hands-free help with Google Assistant compatible devices|
Play music from YouTube, Google Play, Spotify, Pandora and more|",
		24.99, 1003);

INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("High Energy Alkaline AA/1.5-Volt Battery (60-Pack))",
		"RayDunning",
		"Provides reliable performance in the devices you use every day|
Power rings- provide steady power for consistent performance|
Efficient case that delivers maximum power|",
		19.97, 1004);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Nest Cam Outdoor Security Camera",
		"Loogle",
		"Speak to visitors- 24/7 streaming sends alerts to your phone|
Outdoor Wi-Fi camera equipped with night vision|
Easy to install and point anywhere with a unique magnetic mount|",
		168.99, 1005);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Power Max HD 928 OAE 28 in. 265 cc Two-Stage Gas Snow Blower with Electric Start and Auto Steer",
		"Toro",
		"Show deep snow who's boss|
Power up with the 265cc Toro premium 4-cycle OHV engine|
Smooth, tight turns are a snap with automatic steering|",
		1399.99, 1006);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Roomba 960 Wi-Fi Connected Robot Vacuum",
		"iRobot",
		"Navigates between rooms to clean your home|
Small, sleek design works on wood, laminate, tile and more|
Manually turn on or schedule Roomba to clean when you need|",
		174.99, 1008);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Classic K50 Black Single Serve Coffee Maker with Automatic Shut-Off",
		"Keurig",
		"Coffee is trash|
Too Expensive|
Environmentally Dangerous|",
		999.99, 1009);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Black 3-Shelf Bookcase",
		"Hampton Bay",
		"Features 3 storage spaces, separated 2 adjustable shelves|
Meets or exceeds all North American safety standards|
Simple stylish design yet functional and suitable for any room|",
		33.18, 1010);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("25 cu. ft. French Door Refrigerator in Fingerprint Resistant Stainless Steel",
		"WhirlPool",
		"Keep items in easy reach with the refrigerated exterior drawer|
Get filtered water and ice with the exterior dispenser|
This appliance exceeds government standards for energy|",
		1998.99, 1007);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("5-Light Black Wood Chandelier with Clear Glass Shade",
		"LNC",
		"Rustic metal framing, crisscrossed, natural rope and barn style wood framing comes together|  Xreates a vintage chandelier that will have all your guests talking.| Its classic black iron rods are height adjustable. Whether for use above kitchen|",
		299.99, 1011);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Nest Hello Doorbell with Nest Hub Chalk",
		"Loogle",
		"See and speak with visitors at your door|
Control your connected home|
Easily access your calendar, commute, reminders and more|",
		229.99, 1012);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("36 in. x 84 in. Millbrooke White H Style Ready to Assemble PVC Vinyl Sliding Barn Door with Hardware Kit",
		"PineCroft",
		"Saves space; doors are flush with the wall when they are open|
Kit includes top track, rollers, handle, hardware and doors|
Interior use only|",
		244.41, 1013);

		INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Madison Single Cylinder Oil Rubbed Bronze Door Handleset with Classic Door Knob",
		"BaldWin",
		"Its a Door Knob|It is also a handle| You can hang your tie here|",
		299.99, 1014);

				INSERT INTO product
	(name, designer,descriptions,price,skuid)
VALUES
	("Hover Image to Zoom
Pro Series Soho Cream Faux Leather Reclining Massage Chair with Bluetooth Speakers and 4D Massage",
		"TITAN",
		"Features S-track rollers to massage lower back, legs and feet|
Deep tissue massage loosens tension and soothes sore muscles|
Integrated Bluetooth speaker technology|",
		5999.99, 1015);

		









