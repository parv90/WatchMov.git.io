import React, { Component } from "react";
import "./css/App.css";
import NavigationBar from "./components/navigationBar";
import Slider from "./components/slider";
import Recomendations from "./components/recomendations";
import FooterBar from "./components/footerBar";
import requests from "./requests";
import "bootstrap";

class App extends Component {
  render() {
    const containerStyles = {
      width: "90%",
      height: "100%",
      margin: "0 auto",
    };

    const recomendationStyles = {
      width: "90%",
      height: "100%",
      margin: "20px auto",
    };

    return (
      <div className="app-container">
        <NavigationBar />
        <div style={containerStyles}>
          <Slider fetchUrl={requests.fetchTrendingAll} />
        </div>
        <div style={recomendationStyles}>
          <Recomendations
            title={"Trending"}
            fetchUrl={requests.fetchTrendingAll}
          />
          <Recomendations
            title={"Top Rated Movies"}
            fetchUrl={requests.fetchTopRatedMovies}
          />
          <Recomendations
            title={"Top Rated Tv Shows"}
            fetchUrl={requests.fetchTopRatedTvShows}
          />
          <Recomendations
            title={"Action Movies"}
            fetchUrl={requests.fetchActionMovies}
          />
          <Recomendations
            title={"Action Tv Shows"}
            fetchUrl={requests.fetchActionTvShows}
          />
          <Recomendations
            title={"Comedy Movies"}
            fetchUrl={requests.fetchComedyMovies}
          />
          <Recomendations
            title={"Comedy Tv Shows"}
            fetchUrl={requests.fetchComedyTvShows}
          />
          <Recomendations
            title={"Horror Movies"}
            fetchUrl={requests.fetchHorrorMovies}
          />
          <Recomendations
            title={"Romance Movies"}
            fetchUrl={requests.fetchRomanceMovies}
          />
          <Recomendations
            title={"Soap Tv Shows"}
            fetchUrl={requests.fetchSoapTvShows}
          />
          <Recomendations
            title={"Documentaries"}
            fetchUrl={requests.fetchDocumentaries}
          />
        </div>
        <FooterBar/>
      </div>
    );
  }
}

export default App;
