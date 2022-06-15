var express = require('express');
var app = express();
var fs = require("fs");
const twilio = require('twilio');
var path = require("path");

require('dotenv').config();
var parser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(parser.json())

app.get("/", function (req, res){

   res.sendFile(
      path.join(__dirname, '/index.html')
   );

});

app.post('/text-user', function (req, res) {
   
   // Find your account sid and auth token in your Twilio account Console.
   
   console.log(req.body);

   const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
   const andTitle = req.body.andTitle;
   var message = `Hello ${req.body.receiverName}, its me, ${req.body.name}. My AND title is AND ${andTitle}! :)`;
   var toNumber = req.body.receiverNum;
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