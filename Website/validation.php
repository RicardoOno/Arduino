<?php
$name = $_POST['nome'];
if($name == ''){
    header("location:login.php");

} else {
    session_start();
    $_SESSION['name'] = $name;
    header("location:sendJson.php");
}