import Layout from '../components/homepage/Layout'
import Navbar from '../components/homepage/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
            
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
