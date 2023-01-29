import { Box } from "@mui/material";
import React from "react";

export const HeadingBox = ({ heading, subheading, description }) => {
  return (
    <div>
      <Box
        sx={{
          height: "400px",
          width: "500px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <h2>{heading}</h2>
        <h1>{subheading}</h1>
        <p>{description}</p>
      </Box>
    </div>
  );
};
