import React from "react";
import { MdDelete } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../App";
import axios from "axios";
import { ToastContext } from "../../App";

const DeleteFromList = ({movieId}) => {
  const { setIsMovieAdded } = useContext(ToastContext);
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
        watchlist: false,
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
        setIsMovieAdded(true);
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

  return (
    <Tooltip title="Delete from list">
      <IconButton color="primary" onClick={addToWatchlist}>
        <MdDelete />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteFromList;
