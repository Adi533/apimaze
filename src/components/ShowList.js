// components/ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Show List</h1>
      {shows.map((show) => (
        <div key={show.show.id} className="my-4">
          <h3 className='mb-3'>{show.show.name}</h3>
          {show.show.image && show.show.image.medium && (
            <img
              src={show.show.image.medium}
              alt={show.show.name}
              className="img-fluid mb-3"
            />
          )}
          <p>Rating : {show.show.rating && show.show.rating.average}</p>
          <p>Language : {show.show.language}</p>
          <p>Genres : {show.show.genres[0]}, {show.show.genres[1]}</p>
          <p>Status : {show.show.status}</p>
          <Link to={`/details/${show.show.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
