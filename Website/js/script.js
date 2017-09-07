function kxorro(x) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://192.168.0.103:2001/post/", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(data);
            console.log(json.action);
        }
    };

    if (x == 1) {
        var data = JSON.stringify({"action": "pulse"});
        xhr.send(data);
        console.log(data);
    } else if (x == 0) {
        var data = JSON.stringify({"action": "erro"});
        xhr.send(data);
        console.log('ERROOO');
    } else {
        var data = JSON.stringify({"action": "stop"});
        xhr.send(data);
        console.log('ERROOO');
    }
}