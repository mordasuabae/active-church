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

  return (
    <Box>
    <Box sx={navbar} className={color ? 'header header-bg' : 'header'}>
        <Link href="/">
        <img src="/the-active-church white.png" width={90} alt="church Logo"/>
        </Link>
        <Box sx={{marginRight:"113px"}}>
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
    paddingTop:"6px",
    paddingLeft:"105px",
    background:"transparent",
    position:"fixed",
    width:"100%",
    height:"50px",
    zIndex : '200',
    // transition:".3s ease-in"
}