import Heading from "../Header/Heading";
import "./MainNav.css";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../images/home-icon.svg";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "../../images/movie-icon.svg";
import TheatersIcon from "../../images/series-icon.svg";
import MovieRecom from "../../images/icons8.png";
import MusicIcon from "../../images/spotify.png";
import $ from "jquery";

$(function () {
  $(document).on("scroll", function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link className="navbar-brand" to="/">
          <Heading />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  nav__link">
              <Link className="nav-link" to="/">
                <img
                  src={HomeIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "0px",
                  }}
                  alt=""
                />
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/trending">
                <WhatshotIcon
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                  }}
                />
                Trending
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/all-movies">
                <img
                  src={MovieIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "2px",
                    marginRight: "1px",
                  }}
                  alt=""
                />
                Movies
              </Link>
            </li>
            <li className="nav-item nav__link">
              <Link className="nav-link" to="/all-series">
                <img
                  src={TheatersIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "1px",
                  }}
                  alt=""
                />
                TvSeries
              </Link>
            </li>

            <li className="nav-item nav__link">
          
                <img
                  src={MovieRecom}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "1px",
                  }}
                  alt=""
                  />
                  <a href="https://siabang35-recomsystem-main-b4envl.streamlit.app">Recommend</a> 
                
                  </li>
                  <li className="nav-item nav__link">
             
                <img
                  src={MusicIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "1px",
                  }}
                  alt=""
                  />
                  <a href="https://siabang35-spotify-recommend-app-xfxjtf.streamlit.app">Music</a> 
                
                </li>
               

            {/* <li className="nav-item">
              <Link className="nav-link" to="/not">
                Search
              </Link>
            </li> */}
          </ul>
          <div className="all__right">
            <div className="btn-login">
              <Link to="/login">
                <button className=" login-btn">Seiyū Ops</button>
              </Link>
            </div>
          
          </div>
        </div>
       </nav>
    </>
  );
};

export default MainNav;
