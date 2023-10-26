import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import HorizontalScrollList from '../Components/Projects';

const skills = [
  { icon: <FaHtml5 size={110} />, label: "HTML" },
  { icon: <FaCss3Alt size={110} />, label: "CSS" },
  { icon: <FaJsSquare size={110} />, label: "JavaScript" },
  { icon: <FaReact size={110} />, label: "React" },
  { icon: <FaBootstrap size={110} />, label: "Bootstrap" },
  { icon: <BiLogoGit size={110} />, label: "Git" },
  { icon: <BiLogoVisualStudio size={110} />, label: "VS Code" },
];

function WebDevelopmentSection() {
  
  return (
    <Box py={4} sx={{ background: "black", color: "white", display: "flex", justifyContent: "center"}}>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 1000, background: "black" }}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center", color: "white", marginBottom: 2 , fontFamily :"Helvetica Neue"}}>
          Why Front-End Development?
        </Typography>
        <Typography paragraph sx={{ color: "white", textAlign: "center", fontSize:"20px" }}>
          I enjoy building visually appealing websites and making user experiences better through coding.
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center", color: "white", marginBottom: 2 }}>
          Front-End Skills
        </Typography>
        <Box display="flex" justifyContent="center" mb={4}>
          {skills.map((skill, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <IconButton
                aria-label={skill.label}
                color="primary"
                sx={{
                  m: 2,
                  color: "white", // Set the icon color to white
                  transition: "transform 0.2s", // Add a transition for the tilt effect
                  "&:hover": {
                    transform: "scale(1.2)", // Add tilt effect on hover
                  },
                }}
              >
                {skill.icon}
              </IconButton>
              <Typography variant="subtitle1" sx={{ color: "white" }}>
                {skill.label}
              </Typography>
            </div>
          ))}
        </Box>
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center", color: "white", marginBottom: 2 , fontFamily :"Helvetica Neue" }}>
          Web Development Projects
        </Typography>
        <HorizontalScrollList/>
      </Paper>
    </Box>
  );
}

export default WebDevelopmentSection;
