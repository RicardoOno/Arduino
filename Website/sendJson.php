<?php
    $timer = time_nanosleep(1, 500000000);
    $_SESSION['timer'] = $timer;
    if ( $_SESSION['timer'] === true) {
        echo 'ola';
    };
    require 'requirer/session.php';
?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
<h1>Bem vindo, <?php echo strtoupper($_SESSION['name']) ?></h1>
<h2>Use the HTTP method POST to send data to the PHP file.</h2>
<input type="button" value="Pulse1" onclick="kxorro(0)">
<input type="button" value="Pulse2" onclick="kxorro(1)">
<input type="button" value="Stop ALL" onclick="kxorro(2)">
<input type="button" value="Play a Music" onclick="kxorro('song')">
<a href="game/first.php"><input type="button" value="Play the game"></a>
<p id="demo"></p>

<script src="js/script.js"></script>
</body>
</html>
