// components/ShowDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    setBookingFormVisible(true);
  };

  return (
    <div className="container text-center mt-5">
      {show && (
        <div>
          {show.image && show.image.medium && (
            <img
              src={show.image.medium}
              alt={show.name}
              className="img-fluid mb-3"
            />
          )}
          <h1>{show.name}</h1>
          <p>{show.summary}</p>
          <p>Score: {show.rating && show.rating.average}</p>
          <button onClick={handleBookTicket} className="btn btn-primary mr-2">Book Ticket</button>
          <Link to="/" className="btn btn-secondary ml-2">Back to Show List</Link>
        </div>
      )}

      {bookingFormVisible && <BookingForm movieDetails={show} />}
    </div>
  );
};

export default ShowDetails;
