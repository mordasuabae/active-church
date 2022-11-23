import React from "react";
import Box from "@mui/material/Box";
import Footer from "../components/homepage/Footer";
import Mission from "../pages/Mission";
import Test from "../components/homepage/Test";
import Icons from "../components/homepage/Icons";

const AboutUs = () => {
  return (
    <Box>
      <Mission />
      <Test />
      <Icons />
      <Footer />
    </Box>
  );
};
export default AboutUs;
