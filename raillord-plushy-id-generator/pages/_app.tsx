import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

function SafeHydrate({ children }) {
  return <>
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  </>
}

function PlushyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>RAILLORD PLUSHY ID CARD GENERATOR</title>
    </Head>
    <SafeHydrate><Component {...pageProps} /></SafeHydrate>
  </>
}

export default PlushyApp;