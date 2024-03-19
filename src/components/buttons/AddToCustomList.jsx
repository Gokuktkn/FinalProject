import React from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";

const AddToCustomList = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <Tooltip title="Add to custom list">
      <IconButton color="primary" onClick={() => handleClick()} >
        <MdOutlinePlaylistAdd />
      </IconButton>
    </Tooltip>
  );
};

export default AddToCustomList;
