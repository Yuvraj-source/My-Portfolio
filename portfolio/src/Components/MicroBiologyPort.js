import React from 'react';
import { Grid, Paper, Box, Typography, Card, CardContent } from '@mui/material';

function Portfolio() {
  const experiences = [
    {
      duration: 'May 2024 - Currently working',
      company: 'Enzene Bioscience Ltd Chakan , Pune',
      designation : '- Executive',
      responsibilities: [
        '◉ Isolate, characterize, and identify microorganisms from various sources.',
        '◉ Maintain in-house microbial isolates and prepare subculturing slants to support routine microbiological requirements.', 
        '◉ Compile quarterly reports for the in-house isolate’s library, documenting microbial trends and data.',
        '◉ Manage inventory and reconciliation of bioballs and rehydration fluids, ensuring availability for frequently used microorganisms.',
        

        
        
      ],
    },
    {
      duration: 'February 2020 - April 2021',
      company: 'Indoco Remedies Ltd (Plant 2) Sterile Formulation Plant, Verna, Goa',
      designation:'- Officer',
      responsibilities: [ 
        '◉ Conducted sterility testing for finished products, stability samples, in-process samples (bulk), raw materials, and packaging materials.',
        '◉ Performed Microbial Limit Tests (MLT)',
        '◉ Executed Sterility Method Validation.',
        '◉ Conducted Bacterial Endotoxin Tests (BET) using the gel clot method for Water for Injections (WFI) finished products, raw materials, in-process sampling, and packaging materials.',
        '◉ Validated methods for Microbial Limit Tests.',
        '◉ Validated methods for Bioburden Tests.',
        '◉ Completed Container Closure Integrity Tests (CCIT).',
        '◉ Monitored the environment in the Microbiology Lab.',
        '◉ Conducted sampling of primary packaging materials.'
      ],
    },
    {
      duration: 'May 2018 - December 2019',
      company: 'Eurolife Healthcare Pvt. Ltd. (Baxter India) Waluj, Aurangabad',
      designation : '- Officer',
      responsibilities: [
        '◉ Conducted environmental monitoring in classified areas.',
        '◉ Carried out water sampling and testing, including purified water, potable water, and water for injection (WFI).',
        '◉ Performed Bacterial Endotoxin Tests (BET) using the gel clot method for Water for Injections (WFI),finished products, raw materials, and in-process sampling.',
        '◉ Conducted Bioburden testing for in-process samples.',
        '◉ Executed Microbial Limit Tests (MLT) on raw materials.',
        '◉ Monitored the compressed air.'
      ],
    },
  ];

  const achievements = [
    {
      title: 'USFDA Audit',
      description: 'At Lupin Limited, I have successfully demonstrated Bacterial Endotoxin Test and Sterility Testing to USFDA auditor Cynthia Jim.',
    },
  ];

  const projects = [
    {
      title: 'Potential of Marine Fungi for Different Enzymes',
      description: 'The project work includes exploring the ability of the marine fungi to produce 8 different enzymes which have industrial applications and studying how these enzymes differ from their industrial counterparts.',
    },
  ];

  const cardStyle = {
    background: 'black',
    color: 'white',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  };

  return (
    <Grid container spacing={3} style={{ background: 'black' }}>
      {/* Left Column */}
      <Grid item xs={12} sm={6}>
        <Paper style={{ position: 'sticky', top: '1', marginTop: '100px', marginLeft: '20px' , padding:'10px', background:'black', color:'white' , fontFamily: 'Helvetica Neue' , fontSize:'18px'}}> 
          {/* Title */}
          <Typography variant="h4" paragraph fontFamily={"Helvetica Neue"}>
            Exploring and Enhancing Life at the Microscopic Level
          </Typography>
          {/* Short Intro */}
          <p>
          With over six years of experience in the pharmaceutical industry, I am dedicated to advancing the quality and safety of pharmaceutical products. As a microbiologist, I specialize in conducting precise, high-level testing to ensure compliance with stringent regulatory standards and contribute to the development of safe, effective healthcare solutions. My work is defined by a commitment to scientific excellence, rigorous analysis, and continuous improvement, all of which play a critical role in safeguarding public health.
          </p>
        </Paper>
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} sm={6}>
        <div style={{ overflowY: 'scroll', height: '80vh', marginTop: '10px', background: 'black' , fontFamily:'Helvetica Neue' , fontSize:'18px' }}>
          <Paper style={{ background: 'black', color: 'white', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
            {/* Experience Cards */}
            {experiences.map((experience, index) => (
              <Box key={index} bgcolor="background.black" style={cardStyle} borderRadius={4} m={2} p={2}>
                <Typography variant="body1">{experience.duration}</Typography>
                <Typography variant="body1">{experience.company}</Typography>
                <Typography variant="body1">{experience.designation}</Typography>
                {experience.responsibilities.map((responsibility, i) => (
                  <Typography key={i} variant="body2" paragraph>
                    {responsibility}
                  </Typography>
                ))}
              </Box>
            ))}
          </Paper>

          {/* Achievement Cards */}
          <Paper style={{ background: 'black' }}>
            {achievements.map((achievement, index) => (
              <Card key={index} style={{ ...cardStyle, margin: '16px', borderRadius:'10px', fontFamily:'Helvetica Neue' , fontSize:'18px' }}>
                <CardContent boxShadow={2}>
                  <Typography variant="h5" fontFamily={'Helvetica Neue'}>{achievement.title}</Typography>
                  <p>{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </Paper>

          {/* Project Cards */}
          <Paper style={{ background: 'black', color: 'white' }}>
            {projects.map((project, index) => (
              <Card key={index} style={{ ...cardStyle, margin: '16px', borderRadius:'10px' }}>
                <CardContent>
                  <Typography variant="h5" fontFamily={'Helvetica Neue'}>{project.title}</Typography>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
