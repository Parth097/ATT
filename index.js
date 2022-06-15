const twilio = require('twilio');
// Find your account sid and auth token in your Twilio account Console.
require('dotenv').config();
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const name = 'Parth';
const andTitle = 'Traveler';
var message = `Hello Connor, its me, ${name}. My AND title is AND ${andTitle}! :)`;
var toNumber = '+447891187501';
// Send the text message.
client.messages.create({
  to: toNumber,
  from: process.env.MYTWILLO,
  body: message
});