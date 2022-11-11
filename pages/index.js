import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import Events from "../components/homepage/events";
import { Box } from "@mui/material";
import About from "../components/About";

export default function Home() {
  return (
    <Box>
      <Banner />
      <Events />
      {/* ContactUs */}
      <ContactUs />
      <About />
      {/* Footer */}
      <Footer />
    </Box>
  );
}
