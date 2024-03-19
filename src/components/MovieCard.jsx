import Card from "react-bootstrap/Card";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { MdOutlinePlaylistAdd, MdDelete, MdBookmarkAdd } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AuthContext } from "../App";
import AddToWatchlist from "./buttons/AddToWatchlist";
import AddToCustomList from "./buttons/AddToFavList";
import DeleteFromList from "./buttons/DeleteFromList";
import ButtonsModal from "./buttons/ButtonsModal";
import AddToFavList from "./buttons/AddToFavList";

const MovieCard = ({ title, overview, img, id }) => {
  const navigate = useNavigate();
  // const { isAuthenticated } = useContext(AuthContext);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);

  const imageURL = `https://image.tmdb.org/t/p/w500/${img}`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickImage = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      console.log("need to transfer to movie detail"); // need to implement logic here
    }
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${id}/account_states`, options)
    .then((response) => response.json())
    .then((response) => {
      setIsInFavorites(response.favorite);
      setIsInWatchlist(response.watchlist);
    })
    .catch((err) => console.error(err));

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={imageURL}
          className="movie-card-image"
          onClick={handleClickImage}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="overview">{overview}</Card.Text>
          <AddToWatchlist movieId={id} isInWatchlist={isInWatchlist}  setIsInWatchlist={setIsInWatchlist}/>
          <AddToFavList movieId={id} isInFavorites={isInFavorites} setIsInFavorites={setIsInFavorites} />
          {/* <DeleteFromList movieId={id} /> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
