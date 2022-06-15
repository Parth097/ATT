var express = require('express');
var app = express();
var fs = require("fs");

app.get('/text-user', function (req, res) {
   console.log(123);
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});