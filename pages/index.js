import Head from 'next/head'
import Image from 'next/image'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
    {/* ContactUs */}
    <ContactUs/>
    {/* Footer */}
    <Footer/>
   </div>
  )
}
