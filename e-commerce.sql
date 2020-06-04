-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 04 juin 2020 à 11:58
-- Version du serveur :  10.3.15-MariaDB
-- Version de PHP :  7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `e-commerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `category_id_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `visits` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `category_id_id`, `name`, `price`, `description`, `image`, `stock`, `visits`, `status`) VALUES
(2, 1, 'MSI RTX 2060 super Gaming X', 479.99, 'Du nouveau du côté des RTX série 20 avec la RTX 2060 SUPER ! La MSI GeForce RTX 2060 SUPER Gaming X débarque avec les technologies liées à l\'architecture Turing de Nvidia (DLSS, Ray Tracing) et avec un boost en mémoire et coeurs CUDA par rapport à la RTX 2060. Ces changements matériels permettent à la RTX 2060 SUPER un gain de performances excellent pour une expérience de jeu jusqu\'en 1440p dans le plus grand confort !', '/images/products/msi-rtx.jpg', 122, 12, 1),
(3, 5, 'HyperX Fury DDR4 2 x 8 Go', 89.25, 'Dominez la concurrence grâce la dernière mémoire milieu de gamme HyperX Fury DDR4. Avec une latence CAS basse et les timings les plus agressifs sur des modules à haute vitesse, une nouvelle génération est arrivée. Le kit de mémoire PC DDR4 HyperX Fury 16 Go (2 x 8 Go) dispose de timings 16-18-18 pour une fréquence de 2666 MHz (PC21300). Tirez la meilleure performance des architectures AMD et Intel les plus récentes.', 'images/products/fury.jpg', NULL, NULL, NULL),
(4, 4, 'Cooler Master MasterBox E500L - Argent', 42.95, 'Le boitier se présente avec un design sobre sans compromis sur la performance ou les fonctionnalités. Doté d\'une façade coulissante, accédez facilement aux ports USB uniquement lorsque vous en avez besoin.', 'images/products/coolermaster.jpg', NULL, NULL, NULL),
(5, 1, 'Gigabyte Radeon RX 5700 XT GAMING OC', 469.95, 'Faites place aux nouveaux GPU AMD Radeon Navi reposant sur la nouvelle architecture RDNA avec la carte graphique customisé Gigabyte Radeon RX 5700 XT Gaming OC (GV-R57XTGAMING OC-8GD)! Pensée pour atteindre des performances exceptionnelles en 1440p et une efficacité énergétique excellente, la RX 5700 XT compte également sur 8 Go de mémoire GDDR6 et sur la prise en charge du PCI Express 4.0 pour vous offrir une expérience de jeu ultra-confortable.', 'images/products/cgAMD.jpg', 11, 27, 1),
(6, 4, 'noname', 12, 'rien', NULL, 3, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `banner`) VALUES
(1, 'Carte Graphique', 'images/categories/carte-graphique.jpg', NULL),
(2, 'Processeur', 'images/categories/processeur.jpg', NULL),
(3, 'Carte Mère', 'images/categories/carte-mère.jpg', NULL),
(4, 'Boitier PC', 'images/categories/boitier.jpg', NULL),
(5, 'Mémoires', 'images/categories/ram.jpg', NULL),
(8, 'Alimentation', 'images/categories/alimentation.jpg', NULL),
(9, 'Stockage', 'images/categories/ssd.jpg', NULL),
(10, 'Refroidissement', 'images/categories/watercooling.jpg', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `firstname`, `city`) VALUES
(1, 'aure@aure.com', '[\"ROLE_ADMIN\"]', '123456', 'aure', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BFDD31689777D11E` (`category_id_id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `FK_BFDD31689777D11E` FOREIGN KEY (`category_id_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
