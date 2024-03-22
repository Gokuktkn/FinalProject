import React, { useContext } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import { ToastContext } from "../../App";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";

const AddToFavList = ({ movieId, isInFavorites, setIsInFavorites }) => {
  const { setToastFavMovieAdded, setToastFavMovieRemoved} = useContext(ToastContext);
  const login = localStorage.getItem("data");

  const addToFavlist = async () => {
    if (!login) {
      console.log("User is not authenticated");
      return;
    }
    try {
      const dataBody = {
        media_type: "movie",
        media_id: movieId,
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
        setToastFavMovieAdded(true);
      } else {
        console.error("Failed to add movie to favorite");
      }
    } catch (error) {
      console.error("An error occurred while adding movie to favorite:", error);
    }
  };

  const removeFromFavlist = async () => {
    try {
      const dataBody = {
        media_type: "movie",
        media_id: movieId,
        favorite: false,
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
        setIsInFavorites(false);
        setToastFavMovieRemoved(true);
      } else {
        console.error("Failed to add movie to favorite");
      }
    } catch (error) {
      console.error("An error occurred while adding movie to favorite:", error);
    }
  };

  return (
    <>
      {login ? (
        <Tooltip
          title={
            isInFavorites ? "Remove from Favorite list" : "Add to Favorite list"
          }
        >
          <IconButton
            color="primary"
            onClick={isInFavorites ? removeFromFavlist : addToFavlist}
          >
            {isInFavorites ? <IoHeartDislikeOutline /> : <FcLike />}
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="You need to log in first">
          <IconButton disable>
            <FcLike />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default AddToFavList;
