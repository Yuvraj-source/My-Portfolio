import React from "react";
import { Box, Typography } from "@mui/material";
import "./RotatingCube.css"; // Add the CSS for styling

const RotatingCube = () => {
  return (
    <Box className="cube-container">
      <Box className="cube">
        <Box className="cube-face cube-face-front">
          <Typography variant="h6">Microbiology</Typography>
        </Box>
        <Box className="cube-face cube-face-back">
          <Typography variant="h6">Web Development</Typography>
        </Box>
        <Box className="cube-face cube-face-left">
          <Typography variant="h6">Research</Typography>
        </Box>
        <Box className="cube-face cube-face-right">
          <Typography variant="h6">Projects</Typography>
        </Box>
        <Box className="cube-face cube-face-top">
          <Typography variant="h6">Coding</Typography>
        </Box>
        <Box className="cube-face cube-face-bottom">
          <Typography variant="h6">Quality Control</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RotatingCube;
