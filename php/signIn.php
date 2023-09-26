<?php
require_once '../php/config.php';

// Check if the login form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Perform validation and database query to validate user credentials
    // ...

    if ($result->num_rows > 0) {
        // Set session variable to indicate the user is logged in
        $_SESSION['username'] = $username;
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Invalid username or password.";
    }
}

// Redirect if the user is already logged in
if (isset($_SESSION['username'])) {
    header("Location: ../index.php");
    exit();
}

$conn->close();
?>