import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CustomMoreButton = () => {
  const handleIconClick = () => {
    alert("More Button: Implementation not included!");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <MoreHorizIcon style={{ fontSize: 30 }} />
    </IconButton>
  );
};

export default CustomMoreButton;
