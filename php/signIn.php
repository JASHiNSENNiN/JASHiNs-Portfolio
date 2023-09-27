<?php
require_once '../php/config.php';

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
    $_SESSION['logged_in'] = true; // Set the logged_in session variable to true
    header('Location: index.php');
    exit();
} else {
    // Authentication failed, show error message or redirect to the login page
    header('Location: ../pages/signInPage.php?error=1');
    exit();
}
?>