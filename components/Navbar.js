import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Typography } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box>
    <Box sx={navbar}>
        <Link href="/">
        <img src="/the-active-church white.png" width={90} alt="church Logo"/>
        </Link>
        <DragHandleIcon sx={{ color:"white", fontSize:"55px", marginRight:"70px"}}/>
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
    paddingTop:"20px",
    paddingLeft:"120px",
    background:"#e1eef5",
    position:"fixed",
    width:"100%",
    height:"62px",
    zIndex : '200'
}