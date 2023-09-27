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

// Prepare the query
$stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
$stmt->bindValue(':username', $username, PDO::PARAM_STR);
$stmt->bindValue(':password', $password, PDO::PARAM_STR);

// Execute the query
$stmt->execute();

// Redirect to a success page
header('Location: ../pages/signInPage.php');
exit();
?>