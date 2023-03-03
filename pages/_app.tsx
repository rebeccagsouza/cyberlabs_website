import Navbar from "../src/components/organisms/Navbar/Navbar"
import Footer from "../src/components/organisms/Footer/Footer"
import Carousel from "../src/components/molecules/Carousel/Carousel"
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {

  const metas =       
    <Head>
      <title>Cyberlabs</title>
      <meta name='description' content='Cyberlabs webpage' />
      <link rel="icon" href="https://cyberlabs.ai/wp-content/uploads/2021/09/cropped-FAV_ICON-02-192x192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://cyberlabs.ai/wp-content/uploads/2021/09/cropped-FAV_ICON-02-180x180.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
    </Head>


  return (
    <ThemeProvider theme={theme}>
      {metas}
      <GlobalStyle/>
      <Navbar />
      <Component {...pageProps} />
      <Carousel />
    </ThemeProvider>
  )
}
