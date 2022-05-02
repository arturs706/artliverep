import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta name="description" content="Calendar API"/>
            <meta name="keywords" content="Calendar API"/>
            <meta name="author" content="CalendarAPI"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
            <link
                rel="preload"
                href="fonts/Terrabyte-Regular.otf"
                as="font"
                crossOrigin=''
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument