import Card from "react-bootstrap/Card";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";
import { MdOutlinePlaylistAdd, MdDelete, MdBookmarkAdd } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AuthContext } from "../App";
import AddToWatchlist from "./buttons/AddToWatchlist";
import AddToCustomList from "./buttons/AddToCustomList";
import DeleteFromList from "./buttons/DeleteFromList";
import ButtonsModal from "./buttons/ButtonsModal";


const MovieCard = ({ title, overview, img, id }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const imageURL = `https://image.tmdb.org/t/p/w500/${img}`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleClickImage = () => {
  
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      console.log("add to watchlist"); // need to implement logic here
    }
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imageURL} className="movie-card-image" onClick={handleClickImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="overview">{overview}</Card.Text>
          <AddToWatchlist movieId={id} />
          <AddToCustomList onClick={handleOpen} />
          <DeleteFromList />
          <ButtonsModal open={open} close={close} handleClose={handleClose}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
