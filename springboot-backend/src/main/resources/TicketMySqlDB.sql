CREATE DATABASE `ticket_queue_log_management_system` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ticket_queue_log_management_system`;
CREATE TABLE `tickets` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ticket_author` varchar(255) DEFAULT NULL,
  `ticket_status` varchar(255) DEFAULT NULL,
  `ticket_title` varchar(255) DEFAULT NULL,
  `ticket_timestamp` varchar(255) DEFAULT NULL,
  `ticket_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `ticket_queue_log_management_system`.`tickets`
(`id`,
`ticket_author`,
`ticket_status`,
`ticket_title`,
`ticket_timestamp`,
`ticket_description`)
VALUES
(115,'user1','Opened','Access Issues','24-04-2021 04:26:37','Access Issue to Service First'),
(112,'user2','In Progress','Server Down','25-04-2021 04:26:37','Prod server is down'),
(113,'user3','Complete','Dashboard Not Available','21-04-2021 12:26:37','Dashboard needs to be refreshed');