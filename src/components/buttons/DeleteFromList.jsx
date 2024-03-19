import React from "react";
import { MdDelete } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";

const DeleteFromList = () => {
  return (
    <Tooltip title="Delete from list">
      <IconButton color="primary">
        <MdDelete />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteFromList;
