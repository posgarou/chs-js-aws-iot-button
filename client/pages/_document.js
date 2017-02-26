import Document, { Head, Main, NextScript } from 'next/document'

import { styleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const style = styleSheet.getCSS()
    return { ...page, style }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css' />
          <link href='https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,600' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600' rel='stylesheet' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js' type='text/javascript' />
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
