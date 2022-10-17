import React from "react";
import { Box, CardMedia } from "@mui/material";

export const CarMediaImage = ({ image }) => {
  return (
    <div className="list-item__image">
    <img
      src={image}
      className="bf-ui-image--default"
    />
  </div>
  );
};
