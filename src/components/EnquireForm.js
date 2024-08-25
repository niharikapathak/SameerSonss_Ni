import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./styles.css";
import axios from 'axios';

const EnquireForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    address: '',
    city: '',
    mobile: '',
    email: '',
    inquiryDetails: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccessMessage(''); // Clear previous success message

    // Mobile number validation
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    // Log the form data being sent
    console.log('Sending form data:', formData);

    axios.post('http://localhost:5000/send-email', formData)
      .then(response => {
        console.log('Email sent successfully:', response.data);
        setSuccessMessage('Enquiry sent successfully!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setError('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="bodyStyle">
      <div className="img">
        <form onSubmit={handleSubmit}>
          <div className="sty1 shadow rounded">
            <strong className="upside-down-text">ENQUIRE NOW</strong><br></br><br></br>
            
            <Form.Group controlId="fullName" className="form-group-inline">
              <Form.Label className="required-label inline-label">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </Form.Group>

            <Form.Group controlId="companyName" className="form-group-inline">
              <Form.Label className="required-label inline-label">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your company name"
                required
              />
            </Form.Group>

            <Form.Group controlId="address" className="form-group-inline">
              <Form.Label className="required-label inline-label">Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your address"
                required
              />
            </Form.Group>

            <Form.Group controlId="city" className="form-group-inline">
              <Form.Label className="required-label inline-label">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your city"
                required
              />
            </Form.Group>

            <Form.Group controlId="mobile" className="form-group-inline">
              <Form.Label className="required-label inline-label">Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your mobile number"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="form-group-inline">
              <Form.Label className="required-label inline-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="inquiryDetails" className="form-group-inline">
              <Form.Label className="required-label inline-label">Inquiry Details</Form.Label>
              <Form.Control
                as="textarea"
                name="inquiryDetails"
                value={formData.inquiryDetails}
                onChange={handleChange}
                className="form-control textarea-control"
                placeholder="Enter details of your inquiry"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="sty2">
              SUBMIT
            </Button>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquireForm;
