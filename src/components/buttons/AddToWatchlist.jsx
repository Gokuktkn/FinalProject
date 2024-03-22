import React from "react";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../App";
import axios from "axios";
import { ToastContext } from "../../App";
import { CiBookmarkRemove } from "react-icons/ci";

const AddToWatchlist = ({ movieId, isInWatchlist, setIsInWatchlist }) => {
  const { setToastWatchlistMovieAdded, setToastWatchlistMovieRemoved } = useContext(ToastContext);
  const login = localStorage.getItem("data");

  const addToWatchlist = async () => {
    if (!login) {
      console.log("User is not authenticated");
      return;
    }
    try {
      const dataBody = {
        media_type: "movie",
        media_id: movieId,
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
        setToastWatchlistMovieAdded(true);
      } else {
        console.error("Failed to add movie to watchlist");
      }
    } catch (error) {
      console.error(
        "An error occurred while adding movie to watchlist:",
        error
      );
    }
  };

  const removeFromWatchlist = async () => {
    try {
      const url = `https://api.themoviedb.org/3/account/21038321/watchlist`;
      const dataBody = {
        media_type: "movie",
        media_id: movieId,
        watchlist: false,
      };
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
      };
      const response = await axios.post(url, dataBody, { headers });
      if (response) {
        console.log(response);
        setIsInWatchlist(false);
        setToastWatchlistMovieRemoved(true);
      } else {
        console.error("Failed to remove movie from watchlist");
      }
    } catch (error) {
      console.error("An error occurred while removing movie from watchlist:", error);
    }
  };

  return (
    <>
      {login ? (
        <Tooltip
          title={isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        >
          <IconButton color="primary" onClick={isInWatchlist ? removeFromWatchlist : addToWatchlist}>
            {isInWatchlist ?  <CiBookmarkRemove /> : <MdBookmarkAdd color="darkOrange"/>}
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="You need to log in first">
          <IconButton disable>
            <MdBookmarkAdd color="darkOrange"/>
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default AddToWatchlist;
