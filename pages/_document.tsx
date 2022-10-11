import type { DocumentProps } from "next/document";
import { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { textColorLightBackground } from "../components/style/colors";
export default function Document({ css }: DocumentProps & { css: string }) {
  return (
    <Html>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:300,300i,700&display=optional"
          rel="stylesheet"
        />
        <style>
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
              p,
              li,
              ul,
              ol {
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
    </Html>
  );
}
