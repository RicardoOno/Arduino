
var five = require("johnny-five");
var board = new five.Board();

module.exports = function (app) {

    board.on("ready", function() {
        var led1 = new five.Led(11);
        var led2 = new five.Led(10);
        var led3 = new five.Led(5);

/*        app.get('/get/:command', function (req, res) {
            var command = req.params.command;
            console.log(command);
            res.send('command');
            switch (command) {
                case 'pulse':
                        led1.pulse();
                        break;
                case 'light':
                        led2.on();
                        break;
            }
        });
*/
        app.post('/post/', function (req, res) {
            console.log('##### Alguem conectou #####');
            var command = req.body;
            console.log("#### " + command['action'] + " ####");
            console.log(command);
           switch (command['action']) {
               case 'pulse':
                   led1.pulse();
                   led2.pulse();
                   break;
               case 'light':
                   led3.on();
                   break;
               case 'stop':
                   led1.stop().off();
                   led2.stop().off();
                   led3.off();
                   break;
           }
         res.end();
        });
    });
}; //module exports

