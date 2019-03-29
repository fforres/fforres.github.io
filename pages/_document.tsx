// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style type="text/css">@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700,900);</style>
          <style>
          {`
            html { box-sizing: border-box; }
            *, *:before, *:after { 
              box-sizing: inherit; 
              font-family: Lato, sans-serif;
              font-weight: 400;
            }
            body, html, #__next { margin: 0; padding: 0; height: 100% } /* custom! */
          `}
          </style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
