-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2023 at 09:26 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kcpd_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `document_type` varchar(100) NOT NULL,
  `document_url` varchar(150) NOT NULL,
  `verified` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `user_id`, `document_type`, `document_url`, `verified`, `createdAt`) VALUES
(1, 'MALNmebA4L', 'string', 'string', 1, '2023-08-11 14:37:49');

-- --------------------------------------------------------

--
-- Table structure for table `fixtures`
--

CREATE TABLE `fixtures` (
  `id` int(11) NOT NULL,
  `match_number` int(11) NOT NULL,
  `tournament_id` varchar(30) NOT NULL,
  `tournament_game_id` varchar(30) NOT NULL,
  `game_id` int(11) NOT NULL,
  `round_no` int(11) DEFAULT NULL,
  `team_1_id` varchar(30) DEFAULT NULL,
  `team_2_id` varchar(30) DEFAULT NULL,
  `winner_id` varchar(30) DEFAULT NULL,
  `group` int(11) DEFAULT NULL,
  `ground_id` int(11) NOT NULL,
  `umpire_id` varchar(30) NOT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fixtures`
--

INSERT INTO `fixtures` (`id`, `match_number`, `tournament_id`, `tournament_game_id`, `game_id`, `round_no`, `team_1_id`, `team_2_id`, `winner_id`, `group`, `ground_id`, `umpire_id`, `start_time`, `end_time`) VALUES
(39, 1, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '1', '14', '1', 2, 3, 'eUzXa5dePv', '2023-08-14 10:35:00', '2023-08-14 11:05:00'),
(40, 2, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '5', '4', '5', 3, 4, '7XhVNNtush', '2023-08-14 10:35:00', '2023-08-14 11:05:00'),
(41, 3, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '8', '10', '10', 4, 5, 'kkYkANjocU', '2023-08-14 10:35:00', '2023-08-14 11:05:00'),
(42, 4, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '7', '9', '7', 1, 6, 'MALNmebA4L', '2023-08-14 10:35:00', '2023-08-14 11:05:00'),
(43, 5, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '1', '2', '1', 2, 3, 'eUzXa5dePv', '2023-08-14 11:15:00', '2023-08-14 11:45:00'),
(44, 6, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '5', '15', '15', 3, 4, '7XhVNNtush', '2023-08-14 11:15:00', '2023-08-14 11:45:00'),
(45, 7, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '8', '6', '8', 4, 5, 'kkYkANjocU', '2023-08-14 11:15:00', '2023-08-14 11:45:00'),
(46, 8, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '7', '11', '11', 1, 6, 'MALNmebA4L', '2023-08-14 11:15:00', '2023-08-14 11:45:00'),
(47, 9, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '1', '17', '1', 2, 3, 'eUzXa5dePv', '2023-08-14 11:55:00', '2023-08-14 12:25:00'),
(48, 10, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '5', '12', '12', 3, 4, '7XhVNNtush', '2023-08-14 11:55:00', '2023-08-14 12:25:00'),
(49, 11, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '8', '18', '8', 4, 5, 'kkYkANjocU', '2023-08-14 11:55:00', '2023-08-14 12:25:00'),
(50, 12, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '7', '13', '7', 1, 6, 'MALNmebA4L', '2023-08-14 11:55:00', '2023-08-14 12:25:00'),
(51, 13, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '14', '2', '2', 2, 3, 'eUzXa5dePv', '2023-08-14 12:35:00', '2023-08-14 13:05:00'),
(52, 14, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '4', '15', '4', 3, 4, '7XhVNNtush', '2023-08-14 12:35:00', '2023-08-14 13:05:00'),
(53, 15, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '10', '6', '10', 4, 5, 'kkYkANjocU', '2023-08-14 12:35:00', '2023-08-14 13:05:00'),
(54, 16, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '9', '11', '11', 1, 6, 'MALNmebA4L', '2023-08-14 12:35:00', '2023-08-14 13:05:00'),
(55, 17, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '14', '17', '14', 2, 3, 'eUzXa5dePv', '2023-08-14 13:15:00', '2023-08-14 13:45:00'),
(56, 18, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '4', '12', '4', 3, 4, '7XhVNNtush', '2023-08-14 13:15:00', '2023-08-14 13:45:00'),
(57, 19, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '10', '18', '10', 4, 5, 'kkYkANjocU', '2023-08-14 13:15:00', '2023-08-14 13:45:00'),
(58, 20, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '9', '13', '13', 1, 6, 'MALNmebA4L', '2023-08-14 13:15:00', '2023-08-14 13:45:00'),
(59, 21, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '2', '17', '2', 2, 3, 'eUzXa5dePv', '2023-08-14 13:55:00', '2023-08-14 14:25:00'),
(60, 22, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '15', '12', '15', 3, 4, '7XhVNNtush', '2023-08-14 13:55:00', '2023-08-14 14:25:00'),
(61, 23, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '6', '18', '18', 4, 5, 'kkYkANjocU', '2023-08-14 13:55:00', '2023-08-14 14:25:00'),
(62, 24, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, '11', '13', '13', 1, 6, 'MALNmebA4L', '2023-08-14 13:55:00', '2023-08-14 14:25:00'),
(63, 25, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 2, '11', '2', '11', NULL, 3, 'eUzXa5dePv', '2023-08-14 14:40:00', '2023-08-14 15:10:00'),
(64, 26, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 2, '1', '13', '13', NULL, 4, '7XhVNNtush', '2023-08-14 14:40:00', '2023-08-14 15:10:00'),
(65, 27, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 2, '15', '8', '8', NULL, 5, 'kkYkANjocU', '2023-08-14 14:40:00', '2023-08-14 15:10:00'),
(66, 28, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 2, '10', '4', '4', NULL, 6, 'MALNmebA4L', '2023-08-14 14:40:00', '2023-08-14 15:10:00'),
(67, 29, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 3, '11', '13', '13', NULL, 3, 'eUzXa5dePv', '2023-08-14 15:25:00', '2023-08-14 15:55:00'),
(68, 30, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 3, '8', '4', '4', NULL, 4, '7XhVNNtush', '2023-08-14 15:25:00', '2023-08-14 15:55:00'),
(69, 31, 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 4, '13', '4', '13', NULL, 3, 'eUzXa5dePv', '2023-08-14 16:10:00', '2023-08-14 16:40:00'),
(70, 1, 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, '23', '21', '21', NULL, 7, 'eUzXa5dePv', '2023-08-14 12:52:00', '2023-08-14 13:22:00'),
(71, 2, 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, '25', '20', '20', NULL, 8, '7XhVNNtush', '2023-08-14 12:52:00', '2023-08-14 13:22:00'),
(72, 3, 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, '24', '26', NULL, NULL, 9, 'kkYkANjocU', '2023-08-14 12:52:00', '2023-08-14 13:22:00'),
(73, 4, 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, '27', '22', NULL, NULL, 10, 'MALNmebA4L', '2023-08-14 12:52:00', '2023-08-14 13:22:00'),
(74, 5, 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 2, NULL, NULL, NULL, NULL, 7, 'eUzXa5dePv', '2023-08-14 13:37:00', '2023-08-14 14:07:00'),
(75, 6, 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 2, NULL, NULL, NULL, NULL, 8, '7XhVNNtush', '2023-08-14 13:37:00', '2023-08-14 14:07:00'),
(76, 7, 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 3, NULL, NULL, NULL, NULL, 7, 'eUzXa5dePv', '2023-08-14 14:22:00', '2023-08-14 14:52:00');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `name`) VALUES
(1, 'volleyball');

-- --------------------------------------------------------

--
-- Table structure for table `grounds`
--

CREATE TABLE `grounds` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `game_id` varchar(30) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grounds`
--

INSERT INTO `grounds` (`id`, `name`, `game_id`, `location`) VALUES
(1, 'ground 1', 'NvTGdvHARZAFnH3A', 'string'),
(2, 'ground 2', 'NvTGdvHARZAFnH3A', 'string'),
(3, 'High street 1', 'oPpKTxfoe9hNYwyk', 'baner'),
(4, 'High street 2', 'oPpKTxfoe9hNYwyk', 'baner'),
(5, 'High street 3', 'oPpKTxfoe9hNYwyk', 'baner'),
(6, 'High street 4', 'oPpKTxfoe9hNYwyk', 'baner'),
(7, 'High street 1', 'HSohQ8E22JU5oeXQ', 'baner'),
(8, 'High street 2', 'HSohQ8E22JU5oeXQ', 'baner'),
(9, 'High street 3', 'HSohQ8E22JU5oeXQ', 'baner'),
(10, 'High street 4', 'HSohQ8E22JU5oeXQ', 'baner');

-- --------------------------------------------------------

--
-- Table structure for table `organizers`
--

CREATE TABLE `organizers` (
  `id` int(11) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `about` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `ranking` int(11) DEFAULT NULL,
  `plays` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` varchar(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `admin_id` varchar(30) NOT NULL,
  `tournament_id` varchar(30) NOT NULL,
  `tournament_game_id` varchar(30) NOT NULL,
  `verified` int(11) DEFAULT NULL,
  `no_of_boys` int(11) NOT NULL,
  `no_of_girls` int(11) NOT NULL,
  `group` int(11) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `nr` float DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `admin_id`, `tournament_id`, `tournament_game_id`, `verified`, `no_of_boys`, `no_of_girls`, `group`, `points`, `nr`, `createdAt`) VALUES
('1', 'team1', '6zHTiyqVAe', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 2, 6, 5, NULL),
('10', 'team10', 'QGJnzxuSZA', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 4, 6, 1, NULL),
('11', 'tea11', 'ZbqDPV5jZg', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 1, 4, 3, NULL),
('12', 'team12', 'DvTeRNWTJG', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 3, 2, 1, NULL),
('13', 'team13', 'mpqC8HvSzV', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 1, 4, 2, NULL),
('14', 'team14', 'gKdYh6rCS7', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 2, 2, 1, NULL),
('15', 'team15', 'ZbqDPV5jZg', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 3, 4, 2, NULL),
('17', 'user 17', 'fh3zyRYt6V', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 2, 0, -1, NULL),
('18', 'user 18', 'TcHKgnQ3H8', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 4, 2, 0.5, NULL),
('2', 'team0', '7XhVNNtush', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 2, 4, 1.5, NULL),
('20', 'single 1', 'DLxf9Emkcj', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, 2, 0, NULL),
('21', 'single 2', 'eUzXa5dePv', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, 2, 1, NULL),
('22', 'single 3', 'fh3zyRYt6V', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, NULL, NULL, NULL),
('23', 'single 4', 'G6ntVT2vEd', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, NULL, NULL, NULL),
('24', 'single 5', '4KjvA7P3x5', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, NULL, NULL, NULL),
('25', 'single 6', 'MALNmebA4L', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, NULL, NULL, NULL),
('26', 'single 7', 'mpqC8HvSzV', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, NULL, NULL, NULL),
('27', 'single 8', 'ewguJpCrb5', 'HRTirSchGzYehTGx', 'HSohQ8E22JU5oeXQ', 1, 1, 0, NULL, NULL, NULL, NULL),
('4', 'team3', 'DvTeRNWTJG', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 3, 4, 0.7, NULL),
('5', 'team4', 'eUzXa5dePv', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 3, 2, 1, NULL),
('6', 'team5', 'gKdYh6rCS7', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 4, 0, 0, NULL),
('7', 'team6', 'juD3RNnvEA', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 1, 4, 1, NULL),
('8', 'team7', 'Jw4KfPeQr3', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 4, 4, 2, NULL),
('9', 'team8', 'kkYkANjocU', 'HRTirSchGzYehTGx', 'oPpKTxfoe9hNYwyk', 1, 1, 0, 1, 0, -1.5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `team_players`
--

CREATE TABLE `team_players` (
  `id` int(11) NOT NULL,
  `team_id` varchar(30) NOT NULL,
  `player_id` varchar(30) NOT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team_players`
--

INSERT INTO `team_players` (`id`, `team_id`, `player_id`, `createdAt`) VALUES
(1, '1', '6zHTiyqVAe', '2023-05-17 15:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `tournament`
--

CREATE TABLE `tournament` (
  `id` varchar(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `about` varchar(100) NOT NULL,
  `organizer_id` varchar(30) NOT NULL,
  `organizer_name` varchar(100) NOT NULL,
  `organizer_info` varchar(150) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `is_payment_done` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tournament`
--

INSERT INTO `tournament` (`id`, `name`, `about`, `organizer_id`, `organizer_name`, `organizer_info`, `start_date`, `end_date`, `is_payment_done`, `is_active`) VALUES
('HRTirSchGzYehTGx', 'new tournament for league matches testing', 'string', 'juD3RNnvEA', '', '', '2023-08-14 10:34:05', '2023-08-14 10:34:05', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tournament_games`
--

CREATE TABLE `tournament_games` (
  `id` varchar(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `info` varchar(100) DEFAULT NULL,
  `tournament_id` varchar(30) NOT NULL,
  `game_id` int(11) NOT NULL,
  `participation_fees` int(11) NOT NULL,
  `prize_pool` int(11) NOT NULL,
  `max_teams` int(11) NOT NULL,
  `team_size` int(11) NOT NULL,
  `min_girls` int(11) NOT NULL,
  `min_boys` int(11) NOT NULL,
  `open_to` int(11) NOT NULL,
  `total_rounds` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `num_groups` int(11) DEFAULT NULL,
  `teams_per_group` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `min_age` int(11) NOT NULL,
  `max_age` int(11) NOT NULL,
  `avg_duration` int(11) DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tournament_games`
--

INSERT INTO `tournament_games` (`id`, `name`, `info`, `tournament_id`, `game_id`, `participation_fees`, `prize_pool`, `max_teams`, `team_size`, `min_girls`, `min_boys`, `open_to`, `total_rounds`, `type`, `num_groups`, `teams_per_group`, `is_active`, `min_age`, `max_age`, `avg_duration`, `start_date`, `end_date`) VALUES
('HSohQ8E22JU5oeXQ', 'single elimination', 'string', 'HRTirSchGzYehTGx', 1, 0, 0, 8, 1, 0, 1, 1, 3, 1, 0, 0, 1, 17, 27, 30, '2023-08-14 12:52:09', '2023-08-14 22:52:09'),
('oPpKTxfoe9hNYwyk', 'for 16 group league matches', 'string', 'HRTirSchGzYehTGx', 1, 0, 0, 16, 1, 0, 1, 1, 4, 2, 4, 4, 1, 15, 27, 30, '2023-08-14 10:35:56', '2023-08-14 20:35:56');

-- --------------------------------------------------------

--
-- Table structure for table `umpires`
--

CREATE TABLE `umpires` (
  `id` int(11) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `game_id` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `umpires`
--

INSERT INTO `umpires` (`id`, `user_id`, `game_id`) VALUES
(1, 'gKdYh6rCS7', 'NvTGdvHARZAFnH3A'),
(2, '7XhVNNtush', 'NvTGdvHARZAFnH3A'),
(3, 'eUzXa5dePv', 'oPpKTxfoe9hNYwyk'),
(4, '7XhVNNtush', 'oPpKTxfoe9hNYwyk'),
(5, 'kkYkANjocU', 'oPpKTxfoe9hNYwyk'),
(6, 'MALNmebA4L', 'oPpKTxfoe9hNYwyk'),
(7, 'eUzXa5dePv', 'HSohQ8E22JU5oeXQ'),
(8, '7XhVNNtush', 'HSohQ8E22JU5oeXQ'),
(9, 'kkYkANjocU', 'HSohQ8E22JU5oeXQ'),
(10, 'MALNmebA4L', 'HSohQ8E22JU5oeXQ');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(30) NOT NULL,
  `first_name` varchar(80) DEFAULT NULL,
  `last_name` varchar(80) DEFAULT NULL,
  `email_id` varchar(80) NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `verified` int(11) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `profile_url` varchar(150) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email_id`, `phone_no`, `password`, `verified`, `gender`, `dob`, `profile_url`, `createdAt`) VALUES
('4KjvA7P3x5', 'string', 'string', 'user 3', 'user 3', '$2b$12$i0ssBWuoLrTGX72n0Z18le8UWCO6mbhDsV5uF.mxMeLWr1BhEQ.Pm', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:42:17'),
('53wN7HhfNR', 'string', 'string', 'user 19', 'user 19', '$2b$12$x1EUD4PAeZ2mY/Hb6y2Tlegh.hL1gM4.cnd0bNzNrZDFnU3nahyFG', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:51:42'),
('6zHTiyqVAe', 'string', 'string', 'user6', 'user6', '$2b$12$994avslM5g9wGX1SNGtuGu4weHvGEAO49REA4HT2H9.U5Bds6RoOS', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:26'),
('7XhVNNtush', 'string', 'string', 'dummy', 'sfds', '$2b$12$krErQwTCongLaVTQcct9JeGeFmD01/FAhZ7BS10V469z5Uo6HQIP.', 1, 1, '2000-04-01', 'dummy', '2023-08-09 14:04:56'),
('DLxf9Emkcj', 'string', 'string', 'user5', 'user5', '$2b$12$sn62cSm54m4w4f5kJbEBXeWzlPLdLmcBwAgk2yA2FKA9WtP2aJAjq', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:20'),
('DvTeRNWTJG', 'string', 'string', 'user3', 'user3', '$2b$12$JzFlhab/Y5Les0.ho22cCOm.cFwXIrrxXszqlab03d5PsbA09UjzO', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:06'),
('eUzXa5dePv', 'string', 'string', 'user7', 'user7', '$2b$12$xd.9opJRtrLWs8FQf/JssuAAWvmzPlT2rpoIGWGQozk1Ie3JA2KdG', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:31'),
('ewguJpCrb5', 'string', 'string', 'user 2', 'user 2', '$2b$12$JqxMRMo9BusXEj1ohC4Zdevvh0/yIyChz1U5DdXDlXe2VW94GwC6S', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:42:10'),
('fh3zyRYt6V', 'string', 'string', 'user 17', 'user 17', '$2b$12$yulFKXk0J1N3CZPvBDCm3.Wg0SnQvjzCiS6.NqcqUuSfSh/JLsyse', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:50:49'),
('G6ntVT2vEd', 'string', 'string', 'user 1', 'user 1', '$2b$12$SIswd3XmOTbuXfoPA.ONt.GZZj9QNrnlL1yuZnFJ9qZSjA8591CmW', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:42:04'),
('gKdYh6rCS7', 'string', 'string', 'string', 'string', '$2b$12$soQsCIHcxtTWx2i9Y9x85OWLN1F5F7KFcQ3fOndNvbyZpJ4nLl92G', 1, 1, '2000-04-01', 'dummy', '2023-08-09 14:04:01'),
('juD3RNnvEA', 'karan', 'm', 'karan', '8080', '$2b$12$b1htDJNOMMeTyllu526YGuEbSTUepkeO.rNr9bDJpfWs8pBtPae8C', 1, 1, '2000-04-01', 'dummy', '2023-08-09 13:53:32'),
('Jw4KfPeQr3', 'string', 'string', 'user2', 'user2', '$2b$12$M/KpKCHNRskopvUFzBkSyuCGHvX2dRiJ1zaDxIbo3z13GPlRXplbW', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:00'),
('kkYkANjocU', 'string', 'string', 'user4', 'user4', '$2b$12$xtQObfXFEh6VlYnaSnnLEeJVMyuGpoZ8IyoohHfsba4cfFcen/OWy', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:15'),
('MALNmebA4L', 'string', 'string', 'user9', 'user9', '$2b$12$pTuS3YKA3q8SdX1EPeBaeOKeSNs0GanLMMMRSwfX/WyWCtWBv/0Fi', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:44'),
('mpqC8HvSzV', 'string', 'string', 'user 4', 'user 4', '$2b$12$acXZCTUuavez/RoBKzWaaOpqHHKvxYOm1a.PZG3FXAOQwBZ4HvfsC', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:42:22'),
('Pyy6id9AFp', 'string', 'string', 'somesh', 'somesh', '$2b$12$qBseIUxiNF6MaPiadMMpX.D6aHKx3ePFKJIE5RzUqL3KkA8SOzipi', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-12 16:25:00'),
('QGJnzxuSZA', 'string', 'string', 'user1', 'user1', '$2b$12$iRVYlLlepdCXFZAclCkgEuFgM33MPQA2uJoPjv6bwrhI.UlJiQA6.', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:30:50'),
('TcHKgnQ3H8', 'string', 'string', 'user 18', 'user 18', '$2b$12$054aT8PPS5EJvtTwii9z6ehnodMUeJzrZPTqNKZR6PoHqM4CeFSYO', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:51:24'),
('ZbqDPV5jZg', 'string', 'string', 'user 5', 'user 5', '$2b$12$Zk2kDIP9oOW6dWXctWLnZe2cLN53w5VkAaaAZvq.RyWROHS5gY1qi', 0, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ7NRetidOXGwJVnAJXbKD-aTCpm2iDzT6g&usqp=CAU', '2023-08-14 13:42:31'),
('ZeWtsLDECr', 'string', 'string', 'user8', 'user8', '$2b$12$O9GKzKpJSXxZ1TGnMy9ad.xuEKI3qCY.e/Qn4IMbuTELnkSAWEvvy', 1, 1, '2000-04-01', 'dummy', '2023-08-11 14:31:37');

-- --------------------------------------------------------

--
-- Table structure for table `vtb`
--

CREATE TABLE `vtb` (
  `id` int(11) NOT NULL,
  `team_id` varchar(30) NOT NULL,
  `scored_by` varchar(30) NOT NULL,
  `points` int(11) NOT NULL,
  `fixture_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vtb`
--

INSERT INTO `vtb` (`id`, `team_id`, `scored_by`, `points`, `fixture_id`, `created_at`) VALUES
(1, '14', '6zHTiyqVAe', 1, 39, '2023-08-17 13:06:32'),
(2, '14', '6zHTiyqVAe', 1, 39, '2023-08-17 19:03:12'),
(4, '14', '6zHTiyqVAe', 1, 39, '2023-08-17 19:03:27'),
(6, '14', '6zHTiyqVAe', 1, 39, '2023-08-17 19:05:54'),
(7, '14', '6zHTiyqVAe', 1, 39, '2023-08-17 19:05:54'),
(8, '14', '6zHTiyqVAe', 1, 39, '2023-08-17 19:05:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `ix_DOCUMENTS_id` (`id`);

--
-- Indexes for table `fixtures`
--
ALTER TABLE `fixtures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tournament_id` (`tournament_id`),
  ADD KEY `tournament_game_id` (`tournament_game_id`),
  ADD KEY `game_id` (`game_id`),
  ADD KEY `team_1_id` (`team_1_id`),
  ADD KEY `team_2_id` (`team_2_id`),
  ADD KEY `winner_id` (`winner_id`),
  ADD KEY `ground_id` (`ground_id`),
  ADD KEY `umpire_id` (`umpire_id`),
  ADD KEY `ix_FIXTURES_id` (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grounds`
--
ALTER TABLE `grounds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game_id` (`game_id`),
  ADD KEY `ix_GROUNDS_id` (`id`);

--
-- Indexes for table `organizers`
--
ALTER TABLE `organizers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `ix_ORGANIZERS_id` (`id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `ix_PLAYERS_id` (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`),
  ADD KEY `tournament_id` (`tournament_id`),
  ADD KEY `tournament_game_id` (`tournament_game_id`),
  ADD KEY `ix_TEAMS_id` (`id`);

--
-- Indexes for table `team_players`
--
ALTER TABLE `team_players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`),
  ADD KEY `player_id` (`player_id`),
  ADD KEY `ix_TEAM_PLAYERS_id` (`id`);

--
-- Indexes for table `tournament`
--
ALTER TABLE `tournament`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organizer_id` (`organizer_id`),
  ADD KEY `ix_TOURNAMENT_id` (`id`);

--
-- Indexes for table `tournament_games`
--
ALTER TABLE `tournament_games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tournament_id` (`tournament_id`),
  ADD KEY `game_id` (`game_id`),
  ADD KEY `ix_TOURNAMENT_GAMES_id` (`id`);

--
-- Indexes for table `umpires`
--
ALTER TABLE `umpires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `game_id` (`game_id`),
  ADD KEY `ix_UMPIRES_id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_id` (`email_id`),
  ADD UNIQUE KEY `phone_no` (`phone_no`),
  ADD KEY `ix_USERS_id` (`id`);

--
-- Indexes for table `vtb`
--
ALTER TABLE `vtb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`),
  ADD KEY `scored_by` (`scored_by`),
  ADD KEY `fixture_id` (`fixture_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fixtures`
--
ALTER TABLE `fixtures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `grounds`
--
ALTER TABLE `grounds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `organizers`
--
ALTER TABLE `organizers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `team_players`
--
ALTER TABLE `team_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `umpires`
--
ALTER TABLE `umpires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vtb`
--
ALTER TABLE `vtb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `fixtures`
--
ALTER TABLE `fixtures`
  ADD CONSTRAINT `fixtures_ibfk_1` FOREIGN KEY (`tournament_id`) REFERENCES `tournament` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fixtures_ibfk_2` FOREIGN KEY (`tournament_game_id`) REFERENCES `tournament_games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fixtures_ibfk_3` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `fixtures_ibfk_4` FOREIGN KEY (`team_1_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `fixtures_ibfk_5` FOREIGN KEY (`team_2_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `fixtures_ibfk_6` FOREIGN KEY (`winner_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `fixtures_ibfk_7` FOREIGN KEY (`ground_id`) REFERENCES `grounds` (`id`),
  ADD CONSTRAINT `fixtures_ibfk_8` FOREIGN KEY (`umpire_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `grounds`
--
ALTER TABLE `grounds`
  ADD CONSTRAINT `grounds_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `tournament_games` (`id`);

--
-- Constraints for table `organizers`
--
ALTER TABLE `organizers`
  ADD CONSTRAINT `organizers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `players_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `teams_ibfk_2` FOREIGN KEY (`tournament_id`) REFERENCES `tournament` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `teams_ibfk_3` FOREIGN KEY (`tournament_game_id`) REFERENCES `tournament_games` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `team_players`
--
ALTER TABLE `team_players`
  ADD CONSTRAINT `team_players_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `team_players_ibfk_2` FOREIGN KEY (`player_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tournament`
--
ALTER TABLE `tournament`
  ADD CONSTRAINT `tournament_ibfk_1` FOREIGN KEY (`organizer_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tournament_games`
--
ALTER TABLE `tournament_games`
  ADD CONSTRAINT `tournament_games_ibfk_1` FOREIGN KEY (`tournament_id`) REFERENCES `tournament` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tournament_games_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`);

--
-- Constraints for table `umpires`
--
ALTER TABLE `umpires`
  ADD CONSTRAINT `umpires_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `umpires_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `tournament_games` (`id`);

--
-- Constraints for table `vtb`
--
ALTER TABLE `vtb`
  ADD CONSTRAINT `vtb_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `vtb_ibfk_2` FOREIGN KEY (`scored_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `vtb_ibfk_3` FOREIGN KEY (`fixture_id`) REFERENCES `fixtures` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;