import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import MovieCard from "../components/MovieCard";
import "react-toastify/dist/ReactToastify.css";

export const MyListToastContext = createContext();
const MyList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/account/21038321/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setWatchlist(data.results);
        } else {
          console.error("Failed to fetch watchlist");
        }
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, []); 

  useEffect(() => {
    const fetchFavList = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/account/21038321/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setFavList(data.results);
        } else {
          console.error("Failed to fetch favorite list");
        }
      } catch (error) {
        console.error("Error fetching favorite list:", error);
      }
    };

    fetchFavList();
  }, []); 

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="movies-heading ">My Lists</h1>
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
