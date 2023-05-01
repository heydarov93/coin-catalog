-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: coin_catalog
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coin_category` int NOT NULL,
  `coin_name` varchar(255) NOT NULL,
  `coin_shortDesc` varchar(500) DEFAULT NULL,
  `coin_country` varchar(200) DEFAULT NULL,
  `coin_composition` varchar(200) DEFAULT NULL,
  `coin_quality` varchar(155) DEFAULT NULL,
  `coin_denomination` varchar(255) DEFAULT NULL,
  `coin_year` year DEFAULT NULL,
  `coin_weight` varchar(155) DEFAULT NULL,
  `coin_price` varchar(155) DEFAULT NULL,
  `coin_img1` varchar(255) DEFAULT NULL,
  `coin_img2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,3,'Canadian Beaver','\"Canadian beaver\". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.','CANADA','nickel','BU','5 cents',1965,'4.54 g','40$','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Canadian%20Beaver_1.png?alt=media&token=afbc2d60-686f-4b1f-b84a-91271b7ea863','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Canadian%20Beaver_2.png?alt=media&token=904a4789-a46e-4074-b7ff-1128e4818bc9'),(2,3,'Looney','\"Looney\". Unique coin with the image of a goat. Canadian dollar symbol.','CANADA','gold','BU','1 dollar',1970,'5.4 g','65$','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Looney_1.png?alt=media&token=5a86a8a0-c81a-4407-a69d-95ef6d02698b','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Looney_2.png?alt=media&token=212927e0-64e1-413e-8839-9d6bdfbf5f2d'),(3,1,'South Vietnamese Dong','Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.','the Republic of Vietnam','nickel','BU','1 dong',1955,'5.05 g','56$','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/South%20Vietnamese%20Dong_1.png?alt=media&token=6de91a90-4b9d-48e0-9667-c4df550ccda4','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/South%20Vietnamese%20Dong_2.png?alt=media&token=b2416927-26cd-4dd0-99e0-a4cb32671788'),(4,1,'The British Antelope','Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952','British South Africa','gold','BU','1/2 pound',1952,'6.3 g','78$','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/The%20British%20Antelope_1.png?alt=media&token=5d9fd94b-4c16-47a3-a126-0cb46547652b','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/The%20British%20Antelope_2.png?alt=media&token=7bb39786-97f8-4061-a8a1-7fb4d2c42936'),(5,2,'Lion sedge','Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition.','India','steel','BU','1 rupee',1975,'4.95 g','76$','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Lion%20sedge_1.png?alt=media&token=dcc5ec57-bd22-4a22-90c2-00f9b797c723','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Lion%20sedge_2.png?alt=media&token=ec155b9b-cc3c-4689-84d6-a78d4861c7a2'),(6,2,'Rial','Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.\n','Iran','silver','BU','5000 dinars',1928,' 6.12 g','98$','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Rial_1.png?alt=media&token=d231a359-39ca-406d-bf0a-5222b794cdac','https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Rial_2.png?alt=media&token=40969c1f-e464-47db-9af9-98e887f3bde3');
/*!40000 ALTER TABLE `coins` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-01 22:30:52
