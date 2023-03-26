<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Database connection
    $con = new mysqli("localhost", "root","","LoginBase");
    if($con->connect_error) {
        die("Failed to connect: " .$con->connect_error)
    
    } else {
        $stmt = $con-> prepare("select")
    }
    
?>