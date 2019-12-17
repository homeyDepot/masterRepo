DROP DATABASE IF EXISTS imageGallery;

CREATE DATABASE imageGallery;

USE imageGallery;

CREATE TABLE test_pic (id int AUTO_INCREMENT PRIMARY KEY, img text, pic1 text, pic2 text, pic3 text, pic4 text);

INSERT INTO test_pic (img, pic1, pic2, pic3, pic4) VALUES ( 'https://images.homedepot-static.com/productImages/01a87c8a-5e89-430d-8e55-217f1d1f097d/svn/fingerprint-resistant-stainless-steel-whirlpool-french-door-refrigerators-wrx735sdhz-64_1000.jpg', 'https://images.homedepot-static.com/productImages/c9451ee5-f202-494c-90bd-eed50a9c8daa/svn/fingerprint-resistant-stainless-steel-whirlpool-french-door-refrigerators-wrx735sdhz-e1_1000.jpg', 'https://images.homedepot-static.com/productImages/dd0f3aea-6753-4d72-86ce-b64f86618230/svn/fingerprint-resistant-stainless-steel-whirlpool-french-door-refrigerators-wrx735sdhz-40_1000.jpg', 'https://images.homedepot-static.com/productImages/a878a88e-824a-44bb-980d-e34b2adf7844/svn/fingerprint-resistant-stainless-steel-whirlpool-french-door-refrigerators-wrx735sdhz-a0_1000.jpg', 'https://images.homedepot-static.com/productImages/3e489081-bd11-4c2d-8db9-7509852c75fa/svn/fingerprint-resistant-stainless-steel-whirlpool-french-door-refrigerators-wrx735sdhz-fa_1000.jpg');
