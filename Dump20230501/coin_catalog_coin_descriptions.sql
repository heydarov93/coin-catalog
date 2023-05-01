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
-- Table structure for table `coin_descriptions`
--

DROP TABLE IF EXISTS `coin_descriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coin_descriptions` (
  `desc_id` int NOT NULL AUTO_INCREMENT,
  `desc_coinId` int NOT NULL,
  `desc_text` text COLLATE utf8mb3_turkish_ci NOT NULL,
  PRIMARY KEY (`desc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_turkish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coin_descriptions`
--

LOCK TABLES `coin_descriptions` WRITE;
/*!40000 ALTER TABLE `coin_descriptions` DISABLE KEYS */;
INSERT INTO `coin_descriptions` VALUES (1,1,'In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.'),(2,1,'In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription \"5 cents\" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.'),(3,2,'The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle \"Canadian dollar\".'),(4,2,'The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage.'),(5,3,'Currency of the Republic of Vietnam in 1955-1975.'),(6,3,'On the front side, we see wheat, and on the back, a unit symbolizing money.'),(7,3,'The monetary unit of South Vietnam was originally the Indochinese piastre, issued by the Institute of Emissions of the States of Cambodia, Laos and Vietnam. Banknotes of the graduating institute were issued in three types: Cambodian, Lao and Vietnamese. The inscriptions on the banknotes of all samples were made in four languages: French, Khmer, Lao and Vietnamese. Vietnamese-style banknotes depicted a pattern, as well as the inscription “VIÊN PHÁT-HÀNH”. Piastres previously issued by the French Bank of Indochina were also in circulation.'),(8,4,'On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX.'),(9,4,'On the other side of the coin is an Antelope. Around it is the inscription SOUTH AFRICA 1952 SUID AFRICA, dotted with dots. Below is the nominal value.\nIssuing Country - British South Africa'),(10,5,'It depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain.'),(11,5,'The rupee (from Sanskrit silver) is an Indian historical silver coin, put into circulation in the 15th century, as well as the monetary unit of a number of countries in South Asia.'),(12,5,'After the British conquest of Burma in 1852, the Indian rupee became its currency.'),(13,5,'In 1938, Burma became an independent British colony.'),(14,5,'A year earlier, the release of the Burmese rupee, which lasted until 1952, began.'),(15,5,'In 1952, the Burmese rupee was replaced by a kyat.'),(16,5,'The rupee remained the currency of Portuguese possessions in India until 1959, when it was replaced by the escudos of Portuguese India.'),(17,6,'It depicts a bust of Reza Shah, whose head is turned to the right.'),(18,6,'On the other side is a lion with a saber in front of the radiant sun. Above it is a crown.'),(19,6,'Before the monetary reform of 1932, the currency of Iran was fog. (1 fog = 10 clicks, 1 crane = 1000 dinars.)'),(20,6,'Currently, the name \"fog\" is used to denote the amount of 10 reais.');
/*!40000 ALTER TABLE `coin_descriptions` ENABLE KEYS */;
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
