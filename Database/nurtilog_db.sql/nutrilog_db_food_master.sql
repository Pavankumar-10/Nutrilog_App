-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: nutrilog_db
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `food_master`
--

DROP TABLE IF EXISTS `food_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_master` (
  `food_id` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(100) NOT NULL,
  `calories_per_100g` double NOT NULL,
  `protein_per_100g` double NOT NULL,
  `carbs_per_100g` double NOT NULL,
  `fats_per_100g` double NOT NULL,
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_master`
--

LOCK TABLES `food_master` WRITE;
/*!40000 ALTER TABLE `food_master` DISABLE KEYS */;
INSERT INTO `food_master` VALUES (1,'Potato',77,2,17,0.1),(2,'Tomato',18,0.9,3.9,0.2),(3,'Onion',40,1.1,9.3,0.1),(4,'Carrot',41,0.9,10,0.2),(5,'Cucumber',15,0.7,3.6,0.1),(6,'Capsicum',31,1,6,0.3),(7,'Cauliflower',25,2,5,0.3),(8,'Cabbage',25,1.3,6,0.1),(9,'Spinach',23,2.9,3.6,0.4),(10,'Green Peas',81,5.4,14,0.4),(11,'Apple',52,0.3,14,0.2),(12,'Banana',89,1.1,23,0.3),(13,'Mango',60,0.8,15,0.4),(14,'Orange',47,0.9,12,0.1),(15,'Papaya',43,0.5,11,0.3),(16,'Guava',68,2.6,14,1),(17,'Watermelon',30,0.6,8,0.2),(18,'Pineapple',50,0.5,13,0.1),(19,'Grapes',69,0.7,18,0.2),(20,'Pomegranate',83,1.7,19,1.2),(21,'Milk',60,3.2,5,3.5),(22,'Curd',98,11,4,4),(23,'Buttermilk',40,3,5,1),(24,'Lassi',90,3.5,12,2),(25,'Coconut Water',19,0.7,4,0.2),(26,'Orange Juice',45,0.7,10,0.2),(27,'Sugarcane Juice',83,0.2,20,0.1),(28,'Tea',1,0,0.3,0),(29,'Coffee',2,0.3,0,0),(30,'Soy Milk',54,3.3,6,1.8),(31,'Chapati',120,3,20,2),(32,'Rice',130,2.7,28,0.3),(33,'Dal',116,9,20,0.4),(34,'Paneer',265,18,2,20),(35,'Soy Chunks',345,52,33,0.5),(36,'Poha',130,2.5,25,2),(37,'Upma',150,4,25,4),(38,'Idli',58,2,12,0.4),(39,'Dosa',168,4.5,30,3.7),(40,'Sambar',70,3,10,1),(41,'Samosa',262,4,31,14),(42,'Vada Pav',290,7,38,12),(43,'Bhel Puri',150,4,28,2),(44,'Dhokla',160,8,24,2),(45,'Khakhra',350,10,65,5),(46,'Popcorn',387,13,78,4),(47,'Roasted Chana',364,19,61,6),(48,'Peanuts',567,26,16,49),(49,'Makhana',347,9,77,0.1),(50,'Biscuits',480,7,68,20),(51,'Burger',295,17,30,12),(52,'Pizza',266,11,33,10),(53,'French Fries',312,3.4,41,15),(54,'Noodles',138,5,25,2),(55,'Pasta',131,5,25,1),(56,'Chips',536,7,53,35),(57,'Chocolate',546,5,61,31),(58,'Ice Cream',207,4,24,11),(59,'Cake',350,4,50,15),(60,'Soft Drink',42,0,11,0),(61,'Almonds',579,21,22,50),(62,'Cashews',553,18,30,44),(63,'Walnuts',654,15,14,65),(64,'Raisins',299,3,79,0.5),(65,'Dates',282,2.5,75,0.4);
/*!40000 ALTER TABLE `food_master` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-15 11:30:20
