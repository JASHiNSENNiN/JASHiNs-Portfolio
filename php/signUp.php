<?php
require_once '../php/config.php';

// Retrieve form data
$username = $_POST['signup-username'];
$password = $_POST['signup-password'];
$confirmPassword = $_POST['signup-confirm-password'];

// Validate the form data
if ($password !== $confirmPassword) {
    // Passwords don't match, show error message or redirect to sign-up page
    header('Location: signup.php?error=1');
    exit();
}

// Connect to the database
$db = new SQLite3(guests);

// Prepare the query
$stmt = $db->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
$stmt->bindValue(':username', $username, SQLITE3_TEXT);
$stmt->bindValue(':password', $password, SQLITE3_TEXT);

// Execute the query
$stmt->execute();

// Close the database connection
$db->close();

// Redirect to a success page
header('Location: index.php');
exit();
?>