<?php
session_start();
require_once '../php/config.php';

// Check if the user is already logged in
if (isset($_SESSION['username'])) {
    // Redirect to the home page or any other authenticated page
    header('Location: ../index.php');
    exit();
}

// Retrieve form data
$username = $_POST['login-username'];
$password = $_POST['login-password'];

// Prepare the query
$stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
$stmt->bindValue(':username', $username, PDO::PARAM_STR);
$stmt->bindValue(':password', $password, PDO::PARAM_STR);

// Execute the query
$stmt->execute();

// Check if a matching record was found
if ($stmt->fetch()) {
    // Authentication successful, store the username in the session
    $_SESSION['username'] = $username;
    header('Location: ../index.php');
    exit();
} else {
    // Authentication failed, show error message or redirect to the login page
    header('Location: ../pages/signInPage.php?error=1');
    exit();
}
?>