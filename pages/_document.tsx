// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import {
  textColorDarkBackground,
  textColorLightBackground
} from '../components/style/colors'

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
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:300,300i,700"
            rel="stylesheet"
          />
          <style jsx global>
            {`
              html {
                box-sizing: border-box;
              }
              *,
              *:before,
              *:after {
                text-rendering: optimizeSpeed;
                box-sizing: inherit;
                font-family: Lato, sans-serif;
                font-weight: 400;
              }
              p {
                font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                  Helvetica Neue, Helvetica, Arial, sans-serif;
                font-weight: 300;
                line-height: 2.1rem;
                font-size: 1.2rem;
                color: ${textColorLightBackground};
                -webkit-font-smoothing: antialiased;
              }
              b,
              strong {
                font-weight: 700;
              }
              body,
              html,
              #__next {
                margin: 0;
                padding: 0;
                height: 100%;
              } /* custom! */
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
