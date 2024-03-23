import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from "@mui/material";
import { FcLike } from "react-icons/fc";
import { MdBookmarkAdd } from "react-icons/md";

export const Movie = ({ url }) => {
  const [listMovie, setListMovie] = useState([]);
  const navigate = useNavigate();
  const login = localStorage.getItem("data");
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo'
    }
  };
  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await axios.get(url, options)
      setListMovie([...data.data.results]);
      return data;
    }
    fetchMovieData();
  }, []);

  const addToWatchlist = async () => {
    if (!login) {
      navigate("/login");
    } else {
      try {
        const dataBody = {
          media_type: "movie",
          media_id: id,
          watchlist: true,
        };
        const headers = {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
        };
        const url = `https://api.themoviedb.org/3/account/21038321/watchlist`;
        const response = await axios.post(url, dataBody, { headers });
        if (response) {
          console.log(response);
          toast.success("Added to 🍿 WATCHLIST");
        } else {
          console.error("Failed to add movie to watchlist");
          toast.error("Error adding to ❤️ FAVORITE");
        }
      } catch (error) {
        console.error(
          "An error occurred while adding movie to watchlist:",
          error
        );
        toast.error("Error adding to 🍿 WATCHLIST");
      }
    }
  };

  const addToFavlist = async () => {
    if (!login) {
      navigate("/login");
    } else {
      try {
        const dataBody = {
          media_type: "movie",
          media_id: id,
          favorite: true,
        };
        const headers = {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
        };
        const url = `https://api.themoviedb.org/3/account/21038321/favorite`;
        const response = await axios.post(url, dataBody, { headers });
        if (response) {
          console.log(response);
          toast.success("Added to ❤️ FAVORITE");
        } else {
          console.error("Failed to add movie to favorite");
          toast.error("Error adding to ❤️ FAVORITE");
        }
      } catch (error) {
        console.error("An error occurred while adding movie to favorite:", error);
        toast.error("Error adding to ❤️ FAVORITE");
      }
    }
  };

  return (
    <div className='movie-list'>
      {
        listMovie.length > 0 && listMovie.map(item => {
          return <Link to={`/movie/${item.id}`} key={item.id}><div className='movie'><div className="info-movie"><img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} alt='Movie img' className='img-movie' /><div className="title-movie"><p className='name-movie'>{item.title}</p><p className='time-movie'>{item.release_date}</p></div></div><div className="add-list">{login ? (
            <Tooltip title="Add to Watchlist">
              <IconButton color="primary" onClick={addToWatchlist}>
                <MdBookmarkAdd color="darkOrange" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="You need to log in first" classes={{ tooltip: 'custom-tooltip' }}>
              <IconButton color="primary" disable>
                <MdBookmarkAdd color="darkOrange" />
              </IconButton>
            </Tooltip>
          )}
            {login ? (
              <Tooltip title="Add to Favorite list">
                <IconButton color="primary" onClick={addToFavlist}>
                  <FcLike />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="You need to log in first">
                <IconButton disable>
                  <FcLike />
                </IconButton>
              </Tooltip>
            )}</div></div></Link>
        })
      }
    </div>
  )
}

