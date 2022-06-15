var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.

//Require dotenv to hide details. 
require('dotenv').config();
//Getting tokens from the .env file
var client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send the text message.
client.messages.create({
  to: '+447891187501',
  from: '+19855453668',
  body: 'Hello Connor, its me Parth. My AND title is AND Traveler! :)'
});
