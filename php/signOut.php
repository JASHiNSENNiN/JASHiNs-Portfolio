<?php
   require_once '../php/config.php';
   session_start();
   session_unset();
   session_destroy();
   header("Location: login.php");
   exit;
   ?>