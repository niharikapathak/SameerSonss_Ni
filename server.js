const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email sending route
app.post('/send-email', (req, res) => {
  const { fullName, companyName, address, city, mobile, email, inquiryDetails } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient-email@gmail.com', // Replace with your recipient email address
    subject: 'New Inquiry from Website',
    text: `
      Full Name: ${fullName}
      Company Name: ${companyName}
      Address: ${address}
      City: ${city}
  
      Mobile: ${mobile}
      Email: ${email}
      Inquiry Details: ${inquiryDetails}
    `
  };

  // Send inquiry email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending inquiry email:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Inquiry email sent:', info.response);

    // Send confirmation email to sender
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send confirmation to the sender's email address
      subject: 'Confirmation: Inquiry Received',
      text: 'Thank you for your inquiry. We have received your message and will get back to you soon.'
    };

    transporter.sendMail(confirmationMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending confirmation email:', error);
        return res.status(500).send('Error sending confirmation email');
      }
      console.log('Confirmation email sent:', info.response);

      // Respond to the client with success status
      res.status(200).json({ success: true });
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
