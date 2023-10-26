import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function AboutMe() {
  return (
    <Box py={4}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: "Space Grotesk, sans-serif " }} >
  Greetings, I am Yuvraj Salunke, a holder of a Master's degree in Microbiology. My academic journey has cultivated a deep understanding of Microbiology's complexities, igniting a passion to create a meaningful impact in the field.
</Typography>
<Typography variant="body1" paragraph>
  Alongside my academic pursuits, my keen interest in web development has played a vital role. This convergence has allowed me to blend scientific insights with technical skills, creating a unique skill set that bridges both domains.
</Typography>
<Typography variant="body1" paragraph>
  With five years in the pharmaceutical sector, I've gained valuable insights into its workings. This hands-on experience has honed my ability to tackle intricate challenges, contributing to the industry's growth.
</Typography>
<Typography variant="body1" paragraph>
  My journey in web development has equipped me with diverse web technologies and frameworks. Paired with a creative flair, I craft user-centric solutions that seamlessly merge functionality and aesthetics.
</Typography>
<Typography variant="body1">
  Moving forward, I aspire to merge science and technology, channeling expertise into impactful projects that drive progress. I'm committed to continuous growth and innovation in both realms.
</Typography>

      </Paper>
    </Box>
  );
}

export default AboutMe;
