var express = require('express');
var app = express();
var fs = require("fs");
const twilio = require('twilio');
var path = require("path");

require('dotenv').config();


app.get("/", function (req, res){

   res.sendFile(
      path.join(__dirname, '/index.html')
   );

});

app.post('/text-user', function (req, res) {
   
   // Find your account sid and auth token in your Twilio account Console.

   const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
   const name = 'Connor';
   const andTitle = 'Swimming Coach';
   var message = `Hello Connor, its me, ${name}. My AND title is AND ${andTitle}! :)`;
   var toNumber = '+447891187501';
   // Send the text message.
   client.messages.create({
   to: toNumber,
   from: process.env.MYTWILLO,
   body: message
   });

   console.log("Text Sent!");
});


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});