var app = require('./config/custom-express')();
var http = require('http').Server(app);
var cors = require('cors');
//var io = require('socket.io')(http);

//'use strict';
//var access = require('access-control');

/*app.set('io', io);

io.on('connection', function (socket) {
    console.log('====> Algume conectou via Socket Io <====');
}); */

var corsOptions = ({
   credentials: true,
   origins: [
       'http://localhost:8080',
       'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop'
   ],
   optionsSuccessStatus: 200
});

http.listen(2001,  '192.168.0.103', cors(corsOptions) , function () {

   console.log('====> Is connected <====');
});

//var http = require('http').createServer(function (req, res) {

//}).listen(2001, '192.168.0.103');
