<?php
require_once '../php/config.php';

// Retrieve form data
$username = $_POST['login-username'];
$password = $_POST['login-password'];

// Prepare the query
$stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
$stmt->bindValue(':username', $username, PDO::PARAM_STR);

// Enable emulation of prepared statements
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

// Execute the query
$stmt->execute();

// Fetch the user record
$user = $stmt->fetch();

// Check if a matching record was found
if ($user) {
    // Verify the password
    $salt = $user['salt'];
    $hashedPassword = sha1(md5(crypt($password, $salt)));

    if ($hashedPassword === $user['password']) {
        // Authentication successful, store the username in the session
        $_SESSION['username'] = $username;
        $_SESSION['logged_in'] = true; // Set the logged_in session variable to true
        header('Location: ../index.php');
        exit();
    }
}

// Authentication failed, show error message or redirect to the login page
header('Location: ../pages/signInPage.php?error=1');
exit();
?>