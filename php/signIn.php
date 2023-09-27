<?php
require_once '../php/config.php';

// Retrieve form data
$username = $_POST['login-username'];
$password = $_POST['login-password'];

// Connect to the database
$db = new SQLite3(guests);

// Prepare the query
$stmt = $db->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
$stmt->bindValue(':username', $username, SQLITE3_TEXT);
$stmt->bindValue(':password', $password, SQLITE3_TEXT);

// Execute the query
$result = $stmt->execute();

// Check if a matching record was found
if ($result->fetchArray()) {
    // User is authenticated, perform necessary actions (e.g., set session variables)
    // Redirect to a logged-in page
    header('Location: index.php');
    exit();
} else {
    // Authentication failed, show error message or redirect to login page
    header('Location: ../pages/signInPage.php?error=1');
    exit();
}

// Close the database connection
$db->close();
?>