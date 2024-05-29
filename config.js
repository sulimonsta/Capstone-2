module.exports = {
    dbURI: 'mongodb://localhost:27017/healthcare',
    jwtSecret: 'your_jwt_secret',
    emailService: {
      host: 'smtp.example.com',
      port: 587,
      user: 'your_email@example.com',
      pass: 'your_email_password'
    },
    smsService: {
      apiKey: 'your_twilio_api_key',
      apiSecret: 'your_twilio_api_secret'
    },
    videoService: {
      apiKey: 'your_video_service_api_key',
      apiSecret: 'your_video_service_api_secret'
    }
  };
  