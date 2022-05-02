import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../Components/Layout'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
  <>
      <Layout>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
  </>
    
  )
}


