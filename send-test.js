const nodemailer = require('nodemailer');

// Connect to ZoneMTA SMTP server on localhost:2525
let transporter = nodemailer.createTransport({
    host: '127.0.0.1',
    port: 2525,
    secure: false, // ZoneMTA default
    tls: {
        rejectUnauthorized: false
    }
});

let mailOptions = {
    from: 'test@kohinoortrade.com',
    to: 'milinchhipavadiya@gmail.com', 
    subject: 'ZoneMTA Test',
    text: 'Hello! This is a test email sent via ZoneMTA.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
