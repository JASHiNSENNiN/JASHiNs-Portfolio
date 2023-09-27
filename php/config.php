<?php error_reporting(E_ALL);
define('DB_PATH', '../data/guests.db');

// Check if the database file exists
if (!file_exists(DB_PATH)) {
    // Attempt to create the database file
    try {
        $pdo = new PDO('sqlite:' . DB_PATH);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Failed to create the database: " . $e->getMessage();
        exit();
    }

    // Create the users table
    try {
        $pdo->exec("CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )");
        echo "Table created successfully!";
    } catch (PDOException $e) {
        echo "Failed to create the table: " . $e->getMessage();
        exit();
    }
} else {
    // Database file already exists, connect to it
    try {
        $pdo = new PDO('sqlite:' . DB_PATH);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected to the database successfully!";
    } catch (PDOException $e) {
        echo "Failed to connect to the database: " . $e->getMessage();
        exit();
    }
}
?>