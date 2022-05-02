import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import Layout from '../Components/Layout'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
  <>
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Layout>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  </>
    
  )
}

