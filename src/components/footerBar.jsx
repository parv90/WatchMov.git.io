import React, { useState, useEffect } from "react";
import "../css/footerBar.css"

const FooterBar = () => {
    return (
        <div style={{color: "#fff2fb"}}>
            <div className="footer">
                <div className="explore">
                    <h1>Explore</h1>
                    <a href="home">Home</a>
                    <a href="home">Movies</a>
                    <a href="home">Shows</a>
                </div>
                <div className="movie-genre">
                    <h1>Movie By Genre</h1>
                    <a href="home">Action</a>
                    <a href="home">Comedy</a>
                    <a href="home">Horror</a>
                    <a href="home">Romance</a>
                    <a href="home">Soap</a>
                    <a href="home">Documentaries</a>
                </div>
                <div className="support">
                    <h1>Support</h1>
                    <a href="home">About</a>
                    <a href="home">FAQ</a>
                    <a href="home">Privacy Policy</a>
                    <a href="home">Terms & Conditions</a>
                </div>
            </div>
            <div className="footer-end">
                <p>Made by: <span><a href="https://github.com/parv90">Parv Patel</a></span></p>
            </div>
        </div>
    )
}

export default FooterBar;