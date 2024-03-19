import React from "react";
import Header from "../components/Header";
import CarouselSlider from "../components/CarouselSlider";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";
import MovieCard from "../components/MovieCard";
import Button from "react-bootstrap/esm/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContext } from "../App";

export const MyListToastContext = createContext();
const MyList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [favList, setFavList] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/account/21038321/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc",
    options
  )
    .then((response) => response.json())
    .then((response) => setWatchlist(response.results))
    .catch((err) => console.error(err));

  fetch(
    "https://api.themoviedb.org/3/account/21038321/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
    options
  )
    .then((response) => response.json())
    .then((response) => setFavList(response.results))
    .catch((err) => console.error(err));

  // console.log(watchlist);
  return (
    <>
      <Header />
      <div className="container">
        <h1>My Lists</h1>
        <h2>Watchlist</h2>
        <div className="mylist-watchlist">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              img={movie.poster_path}
            ></MovieCard>
          ))}
        </div>
        <h2>Favorite List</h2>
        <div className="mylist-favlist">
          {favList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              img={movie.poster_path}
            ></MovieCard>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyList;
