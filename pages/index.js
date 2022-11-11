import Head from 'next/head'
import Image from 'next/image'
<<<<<<< HEAD:pages/index.js
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
=======
import Banner from '../components/Banner'
>>>>>>> checkout2:pages/index.js
import styles from '../styles/Home.module.css'
<<<<<<< HEAD:pages/index.js
import Events from '../components/homepage/events'
=======
import { Box } from '@mui/material'
>>>>>>> checkout2:pages/index.js

export default function Home() {
  return (
<<<<<<< HEAD:pages/index.js
   <div>
<<<<<<< HEAD:pages/index.js
    {/* ContactUs */}
    <ContactUs/>
    {/* Footer */}
    <Footer/>
=======
    <Events />
=======
   <Box>
    <Banner/>
>>>>>>> checkout2:pages/index.js
    
<<<<<<< HEAD:pages/index.js
>>>>>>> events_and_sermons:pages/index.js
   </div>
=======
   </Box>
>>>>>>> checkout2:pages/index.js
  )
}
