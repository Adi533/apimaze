// components/BookingForm.js
import React, { useState, useEffect } from 'react';

const BookingForm = ({ movieDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add more form fields as needed
  });

  useEffect(() => {
    // Populate default values from movieDetails
    setFormData((prevData) => ({
      ...prevData,
      movieName: movieDetails.name,
      // Add more fields from movieDetails
    }));
  }, [movieDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle form submission
    // You can use local/session storage to store user details
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row mb-3">
          <label htmlFor="movieName" className="col-sm-2 col-form-label">Movie Name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="movieName"
              name="movieName"
              value={formData.movieName}
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Your Name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">Your Email:</label>
          <div className="col-sm-10">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        {/* Add more form fields as needed */}
        <div className="form-group mb-3 row">
          <div className="col-sm-10 offset-sm-1">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
