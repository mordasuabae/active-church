

import { Box } from "@mui/material";
import React from "react";



export default function BannerVideo() {

  return (
    <Box style={{ opacity: "0.8", marginTop: "40px" , border:"1px solid red"}}>
      <iframe
        width="270"
        height="145"
        src="https://www.youtube.com/embed/9e3Vqyp8kr8?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
