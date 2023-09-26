<?php
   require_once '../php/config.php';

   if ($_SERVER["REQUEST_METHOD"] === "POST") {
       $username = $_POST["username"];
       $password = $_POST["password"];

       $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
       if ($conn->query($sql) === TRUE) {
           echo "Registration successful!";
       } else {
           echo "Error: " . $conn->error;
       }
   }

   $conn->close();
   ?>