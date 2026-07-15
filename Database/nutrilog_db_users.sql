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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) DEFAULT NULL,
  `mname` varchar(100) DEFAULT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pavankumar','Tanaji','Jadhav',28,'pavankumarjadhav84@gmail.com','09673975997','Shingnapur','$2a$10$Yi.Eo70zAenOmoRSkQeJB.zuYHnBR7M7hAAotbtoq17LChUPDUDDi','2026-07-07 16:07:09'),(2,'Shubham ',NULL,NULL,28,'shubh@gmail.com',NULL,NULL,'$2a$10$Yb6diSaFhUu2XkRpsUnquuyeKVIXMFNTkDD6OTYeHPb9MqTdFIEU.','2026-07-07 16:08:07'),(3,'Harshwardhan',NULL,NULL,28,'harsh@gmail.com',NULL,NULL,'$2a$10$VdSNU74YEk8mF.0tonGobOgQDOE1rfvtdI3YsgpX4QZasMbxfx79G','2026-07-07 16:08:49'),(4,'Arihant',NULL,NULL,26,'arry@gmail.com',NULL,NULL,'$2a$10$IBwbo05TeXz7h/WDsNs63OOU6wXH7CNv1bSnN7fiP9sKN6nof6Ez6','2026-07-10 04:41:21'),(5,'Sourabh',NULL,NULL,29,'sourabh@gmail.com',NULL,NULL,'$2a$10$MrzXVlMJRzr/1bNHe3VQquS0WJPVAEFeUludtEZj9Ebm8yXrPnn.e','2026-07-10 04:46:28'),(8,'Sham','Ram','Patil',55,'sham@gmail.com','7485296969','Punee','$2a$10$aMdTAKLJaJia3/Y378fAxO6tTXewcbQWVZxiEpZ1v2lWgIXe5a6nS',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
