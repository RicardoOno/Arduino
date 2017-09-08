<?php

    header('Access-Control-Allow-Origin: true');

    session_start('name');
    if($_SESSION['name'] == '') {
        header('location: login.php');
    }

?>