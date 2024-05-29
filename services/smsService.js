const twilio = require('twilio');
const config = require('../config');

const client = new twilio(config.smsService.apiKey, config.smsService.apiSecret);

exports.sendSMS = (to, message) => {
  return client.messages.create({
    body: message,
    to,
    from: 'your_twilio_phone_number'
  });
};
