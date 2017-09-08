console.log( 'Vou executar antes de setInterval() o/' );
var counter = 15;
var timer = setInterval(function() {
    if( counter == 10 ) {
        document.querySelector('#msg').textContent = 'TIME IS OVERING';
        kxorro('song');
    } else if (counter == 0) {

        document.getElementById("demo").innerHTML = counter;
        clearInterval( timer );
        window.location.replace("../sendJson.php");
    }
        document.getElementById("demo").innerHTML = counter;
        console.log(counter--);

}, 1000);

console.log( 'E eu, apesar de estar depois, também vou executar antes do setInterval() xD' );
