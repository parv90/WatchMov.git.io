import React, { Component } from "react";
import { useEffect, useState, useRef } from "react";
import requests from "../requests";
import "../css/recomendations.css";

const Recomendations = ({ title, fetchUrl }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        const result = data.results;
        setmovies(result);
        // console.log({ title }, result);
      });
  }, []);

  const ref = useRef(null);
  const handleScroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const base_url = "https://image.tmdb.org/t/p/original/";

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters" ref={ref}>
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <div key={movie.id} className="poster">
                <img
                  className="row_poster"
                  key={movie.id}
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                />
                <div className="overlay">
                  <h3 className="text">
                    {movie.title || movie.name || movie.original_name}
                  </h3>
                  <p className="para"> {truncate(movie.overview, 50)}</p>
                  <h5 className="rating">IMDB - {movie.vote_average}/10</h5>
                </div>
              </div>
            )
        )}
      </div>
      <button className="scrollRight" onClick={() => handleScroll(-1000)}>
        {"<"}
      </button>
      <button className="scrollLeft" onClick={() => handleScroll(1000)}>
        {">"}
      </button>
    </div>
  );
};

export default Recomendations;
