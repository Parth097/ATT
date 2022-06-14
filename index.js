var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
require('dotenv').config();
var client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send the text message.
client.messages.create({
  to: '+447562872419',
  from: '+19855453668',
  body: 'Hello Connor, its me Parth. My AND title is AND Traveler! :)'
});
