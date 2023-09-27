<?php
require_once '../php/config.php';

// Retrieve form data
$username = $_POST['signup-username'];
$password = $_POST['signup-password'];
$confirmPassword = $_POST['signup-confirm-password'];

// Validate the form data
if ($password !== $confirmPassword) {
    // Passwords don't match, show error message or redirect to sign-up page
    header('Location: ../pages/signInPage.php?error=2');
    exit();
}

if (!preg_match('/^[a-zA-Z0-9_]{4,}$/', $username)) {
    // Invalid username format, show error message or redirect to sign-up page
    header('Location: ../pages/signInPage.php?error=3');
    exit();
}

if (!preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/', $password)) {
    // Invalid password format, show error message or redirect to sign-up page
    header('Location: ../pages/signInPage.php?error=4');
    exit();
}

// Connect to the database
$db = new SQLite3(DB_PATH);

// Prepare the query
$stmt = $db->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
$stmt->bindValue(':username', $username, SQLITE3_TEXT);
$stmt->bindValue(':password', $password, SQLITE3_TEXT);

// Execute the query
$stmt->execute();

// Close the database connection
$db->close();

// Redirect to a success page
header('Location: ../index.php');
exit();
?>