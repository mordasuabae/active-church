import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { stepButtonClasses, Typography } from '@mui/material';
import Link from 'next/link';
import Drawer from './Drawer';



export default function Navbar() {

const [color, setColor] = useState(false)
const [links, setLinks] = useState(false)

const changeColor = () => {
  if(window.scrollY >= 80) {
    setColor(true)
  }else {
    setColor(false)
  }
};
useEffect(() => {
  window.addEventListener('scroll', changeColor);
},[])



//Navbar links should appear when onScroll//

const Navigation = () => {
  if(window.scrollY >= 80) {
    setLinks(true)
  }else {
    setLinks(false)
  }
};
useEffect(() => {
  window.addEventListener('scroll', Navigation);
},[])

  return (
    <Box>
    <Box sx={navbar} className={color ? 'header header-bg' : 'header'}>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Link href="/">
        <img src="/the-active-church white.png" width={90} alt="church Logo"/>
        </Link>

        <Box sx={{display:"none"}} className={color ? 'Nav Nav-bg' : 'Navbar'}>
         <p>Home</p>
         <p>Events</p>
         <p>About us</p>
         <p>Contact us</p>
        </Box>
        </Box>
        <Box sx={{marginRight:"73px"}}>
        <Drawer/>
        </Box>
    </Box>
    </Box>
  )
}

const navbar = {
    display:"flex", 
    alignItems:"center", 
    justifyContent:"Center",
    justifyContent:"space-between",
    cursor:"pointer",
    paddingTop:"15px",
    paddingLeft:"105px",
    background:"transparent",
    position:"fixed",
    width:"100%",
    height:"80px",
    zIndex : '200',
    // transition:".3s ease-in"
}