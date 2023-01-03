import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "../css/slider.css";

const Slider = ({ fetchUrl }) => {
  const [movies, setmovies] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const overlay = {
    position: "absolute",
    height: "100%",
    width: "100%",
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0) 100%)",
    top: "0px",
    zIndex: "0",
    borderRadius: "10px",
  };

  const slideStylesWidthBackground = {
    width: "100%",
    height: "55em",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        const result = data.results;
        setmovies(result.slice(0, 5));
        // console.log(result);
      });
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original/";

  // const truncate = (string, n) => {
  //   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  // };

  return (
    <div>
      <Carousel
        activeIndex={index}
        indicators="false"
        wrap="true"
        onSelect={handleSelect}
      >
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <Carousel.Item key={movie.id} interval={2000}>
                <img
                  className="d-block"
                  src={`${base_url}${movie.backdrop_path}`}
                  alt={movie.name}
                  style={slideStylesWidthBackground}
                />
                <Carousel.Caption style={{ zIndex: "1" }}>
                  <h3 className="text">
                    {movie.title || movie.name || movie.original_name}
                  </h3>
                  <p className="para">{movie.overview}</p>
                  <p className="rating">
                    IMDB - {movie.vote_average}/10
                  </p>
                </Carousel.Caption>
                <div style={overlay}></div>
              </Carousel.Item>
            )
        )}
      </Carousel>
    </div>
  );
};

export default Slider;
