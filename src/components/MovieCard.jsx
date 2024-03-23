import Card from "react-bootstrap/Card";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Backdrop, IconButton, Tooltip, tooltipClasses} from "@mui/material";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const MovieCard = ({ title, overview, img, id, mediaType }) => {
  const navigate = useNavigate();

  const login = localStorage.getItem("data");
  const imageURL = `https://image.tmdb.org/t/p/w500/${img}`;
  const imageURLDefault = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`;

  const handleClickImage = () => {
    if (!login) {
      navigate("/login");
    } else {
      if (mediaType === "movie") {
        navigate(`/movie/${id}`);
      } else if (mediaType === "tvshow") {
        navigate(`/tv/${id}`);
      }
    }
  };

  const addToWatchlist = async () => {
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
        // console.log(response);
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
  };

  const addToFavlist = async () => {
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
  };

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={img? imageURL : imageURLDefault}
          className="movie-card-image"
          onClick={handleClickImage}
        />
        <Card.Body>
          <Card.Title className="movie-card-title">{title? title : <em>No title available</em>}</Card.Title>
          <Card.Text className="movie-card-overview">{overview? overview : <em>No introduction available</em>}</Card.Text>

          {login ? (
            <Tooltip title="Add to Watchlist">
              <IconButton color="primary" onClick={addToWatchlist}>
                <MdBookmarkAdd color="darkOrange" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="You need to log in first" >
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
            <Tooltip title="You need to log in first" >
              <IconButton disable>
                <FcLike />
              </IconButton>
            </Tooltip>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
