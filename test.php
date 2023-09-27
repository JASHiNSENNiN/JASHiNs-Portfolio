<?php

try {
    define('DB_PATH', '../data/guests.db');
    $pdo = new PDO('sqlite:' . DB_PATH);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected to the database successfully!";
} catch (PDOException $e) {
    echo "Failed to connect to the database: " . $e->getMessage();
}
?>
