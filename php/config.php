<?php
session_start();
error_reporting(E_ALL);
define('DB_HOST', 'localhost');
define('DB_NAME', 'guests');
define('DB_USER', 'root');
define('DB_PASSWORD', '');

// Create a new PDO instance
try {
    $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Failed to connect to the database: " . $e->getMessage();
    exit();
}

if (isset($_SESSION['username'])) {
    // Redirect to the home page or any other authenticated page
    header('Location: ./index.php');
    exit();
}

try {
    // Create the "guests" database if it does not exist
    $pdo->exec("CREATE DATABASE IF NOT EXISTS guests");

    // Select the "guests" database
    $pdo->exec("USE guests");

    // Create the "users" table if it does not exist
    $pdo->exec("CREATE TABLE IF NOT EXISTS users (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        salt VARCHAR(255) NOT NULL
    )");
} catch (PDOException $e) {
    echo "Failed to create the users table: " . $e->getMessage();
    exit();
}
?>