import Card from "react-bootstrap/Card";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";
import { MdOutlinePlaylistAdd, MdDelete, MdBookmarkAdd } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AuthContext } from "../App";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MovieCard = ({ title, overview, img }) => {
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
          <Tooltip title="Add to Watchlist">
            <IconButton color="primary" >
              <MdBookmarkAdd />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to custom list">
            <IconButton color="primary" >
              <MdOutlinePlaylistAdd onClick={handleOpen}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete from list">
            <IconButton color="primary" >
              <MdDelete />
            </IconButton>
          </Tooltip>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
