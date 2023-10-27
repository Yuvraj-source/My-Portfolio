import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaLink } from "react-icons/fa"; 
import Project1 from './Assets/Project1.png';
import Project2 from './Assets/Project2.png';
import Project3 from './Assets/Project3.png';

// A function component that renders a card with some content
const CardItem = ({ title, text, github, website, screenshot }) => {
  return (
    <Card style={{ width: 750, margin: 10, border: '1px solid black', boxShadow: '5px 5px 10px gray' }}>
      <img
        src={screenshot} // Use the passed screenshot prop
        alt={`Screenshot of ${title}`}
        style={{ width: '100%', maxHeight: '250px', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {text}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
          <a href={github} target="_blank" rel="noreferrer">
            <GitHubIcon style={{ color: 'black' ,  fontSize: 45  }} />
          </a>
          <a href={website} target="_blank" rel="noreferrer">
            <FaLink style={{ color: 'black' , fontSize: 45  }} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

// A function component that renders a horizontal scroll list of cards
const HorizontalScrollList = () => {
  // An array of data for the cards
  const data = [
    {
      title: 'Microverse',
      text: 'Microverse is a dynamic platform designed with Material UI and React.js, hosted on Netlify. Tailored for microbio students and professionals, its your go-to resource for all things micro. Dive into the world of tiny organisms and endless possibilities at Microverse!',
      github: 'https://github.com/user/project1',
      website: 'https://user.github.io/project1',
      screenshot: Project1, // Use the imported screenshot
    },
    {
      title: 'Foodie',
      text: 'Welcome to Foodie Cloud Kitchen – a culinary showcase! Dive into a world of delectable dishes, meticulously curated with love. Crafted with Material UI and React.js, our platform offers a seamless, elegant experience. Hosted on Netlify, we serve up a feast for your eyes and taste buds, sharing the essence of our exceptional service and flavors. Explore, savor, and enjoy! ',
      github: 'https://github.com/user/project2',
      website: 'https://user.github.io/project2',
      screenshot: Project2, // Use the imported screenshot
    },
    {
      title: 'Agriculture Export',
      text: 'Explore Unity Enterprises at www.unity-enterprises.com, meticulously crafted with HTML, CSS, Bootstrap ,JavaScript  and hosted on Hostinger for an elegant web experience. Discover our agricultural export business, company details, and reach out via our user-friendly contact form.',
      github: 'https://github.com/user/project3',
      website: 'https://user.github.io/project3',
      screenshot: Project3, // Add the screenshot for Project 3
    },
  ];

  return (
    <div style={{ height: 500 }}>
      <HorizontalScroll
        style={{ width: 810, margin: '0 auto' }}
        config={{ stiffness: 100, damping: 20 }}
        pageLock={true}
        alignCenter={true}
      >
        {data.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            text={item.text}
            github={item.github}
            website={item.website}
            screenshot={item.screenshot}
          />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default HorizontalScrollList;
