// const express = require('express');
//
// const app = express();
// const port = process.env.PORT || 3000;
require('dotenv').config();


const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);


// app.get('/', (req, res) => {
//     res.send(process.env.MY_PHONE_NUMBER);
// });
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}.`);
// });


client.messages.create({
  to: process.env.MY_PHONE_NUMBER,
  from: '+16468462045 ',
  body: 'this is amazing'
}).then ((message) => console.log(message.sid));
