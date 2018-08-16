require('dotenv').config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

// const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const client = require('twilio')(accountSid, authToken);

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(process.env.MY_PHONE_NUMBER);
});

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('This is God responding back');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

client.messages.create({
  to: process.env.MY_PHONE_NUMBER,
  from: '+16468462045 ',
  body: 'This is GOD. you are amazing. keep on doing your thing. Now, go in peace serve the lord'
}).then((message) => console.log(message.sid));

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// http.createServer(app).listen(3000, () => {
//   console.log(`express app listening on 3000.`);
// });
