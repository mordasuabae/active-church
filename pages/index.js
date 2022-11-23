import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/homepage/ContactUs";
import Footer from "../components/homepage/Footer";
import Banner from "../components/homepage/Banner";
import styles from "../styles/Home.module.css";
import Events from "../components/homepage/events";
import { Box } from "@mui/material";
import About from "../components/homepage/About";

export default function Home() {
  return (
    <Box>
      <Banner />
      <Events />
      <About />
      {/* ContactUs */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </Box>
  );
}
