import React from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../App";
import axios from "axios";

const API_KEY = "4a1e2ca2b701f11a28e03fd07df4a512";
const AddToWatchlist = ({ movieId }) => {
//   const { isAuthenticated } = useContext(AuthContext);
  const addToWatchlist = async () => {
    // if (!isAuthenticated) {
    //   console.log("User is not authenticated");
    //   return;
    // }
    try {

      const url = `https://api.themoviedb.org/3/account/21038321/watchlist?api_key=${API_KEY}`;
      const response = await axios.post(
        url,
        { media_type: "movie", media_id: movieId },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response) {
        console.log(response);
      } else {
        console.error("Failed to add movie to watchlist");
      }
    } catch (error) {
      console.error("An error occurred while adding movie to watchlist:", error);
    }
  };


  return (
    <Tooltip title="Add to Watchlist">
      <IconButton color="primary" onClick={addToWatchlist}>
        <MdBookmarkAdd />
      </IconButton>
    </Tooltip>
  );
};

export default AddToWatchlist;
