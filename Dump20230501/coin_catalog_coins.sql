-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: coin_catalog
-- ------------------------------------------------------
-- Server version	8.0.28

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
  `coin_longDesc1` text,
  `coin_longDesc2` text,
  `coin_country` varchar(200) DEFAULT NULL,
  `coin_composition` varchar(200) DEFAULT NULL,
  `coin_quality` varchar(155) DEFAULT NULL,
  `coin_denomination` varchar(255) DEFAULT NULL,
  `coin_year` year DEFAULT NULL,
  `coin_weight` varchar(155) DEFAULT NULL,
  `coin_price` varchar(155) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,3,'Canadian Beaver','\"Canadian beaver\". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.','In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.\n','In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription \"5 cents\" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.\n','CANADA','nickel','BU','5 cents',1965,'4.54 g','40$'),(2,3,'Looney','\"Looney\". Unique coin with the image of a goat. Canadian dollar symbol.','The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle \"Canadian dollar\".','The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage.','CANADA','gold','BU','1 dollar',1970,'5.4 g','65$'),(3,1,'South Vietnamese Dong','Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.','Currency of the Republic of Vietnam in 1955-1975.On the front side, we see wheat, and on the back, a unit symbolizing money.','The monetary unit of South Vietnam was originally the Indochinese piastre, issued by the Institute of Emissions of the States of Cambodia, Laos and Vietnam. Banknotes of the graduating institute were issued in three types: Cambodian, Lao and Vietnamese. The inscriptions on the banknotes of all samples were made in four languages: French, Khmer, Lao and Vietnamese. Vietnamese-style banknotes depicted a pattern, as well as the inscription “VIÊN PHÁT-HÀNH”. Piastres previously issued by the French Bank of Indochina were also in circulation.','the Republic of Vietnam','nickel','BU','1 dong',1955,'5.05 g','56$'),(4,1,'The British Antelope','Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952','On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX','On the other side of the coin is an Antelope. Around it is the inscription SOUTH AFRICA 1952 SUID AFRICA, dotted with dots. Below is the nominal value.','British South Africa','gold','BU','1/2 pound',1952,'6.3 g','78$'),(5,2,'Lion sedge','Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition.','It depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain. The rupee (from Sanskrit silver) is an Indian historical silver coin, put into circulation in the 15th century, as well as the monetary unit of a number of countries in South Asia.','After the British conquest of Burma in 1852, the Indian rupee became its currency. In 1938, Burma became an independent British colony. A year earlier, the release of the Burmese rupee, which lasted until 1952, began. In 1952, the Burmese rupee was replaced by a kyat. The rupee remained the currency of Portuguese possessions in India until 1959, when it was replaced by the escudos of Portuguese India','India','steel','BU','1 rupee',1975,'4.95 g','76$'),(6,2,'Rial','Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.\n','It depicts a bust of Reza Shah, whose head is turned to the right. On the other side is a lion with a saber in front of the radiant sun. Above it is a crown.','Before the monetary reform of 1932, the currency of Iran was fog. (1 fog = 10 clicks, 1 crane = 1000 dinars.) Currently, the name \"fog\" is used to denote the amount of 10 reais.','Iran','silver','BU','5000 dinars',1928,' 6.12 g','98$');
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

-- Dump completed on 2023-05-01 17:28:03
