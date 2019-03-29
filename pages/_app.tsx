import React from 'react'
import App, { Container } from 'next/app'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import { tabletMax } from '../components/style/breakpoints'

class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any
    ctx: any
  }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <div className="root">
          <Sidebar />
          <TopBar />
          <div className="pageContainer">
            <Component {...pageProps} />
          </div>
          <style jsx>{`
            .root {
              height: 100%;
              display: flex;
              flex-direction: row;
            }
            .pageContainer {
              width: 100%;
              height: 100%;
              overflow-y: scroll;
            }
            @media (max-width: ${tabletMax}px) {
              .root {
                flex-direction: column;
              }
            }
          `}</style>
        </div>
      </Container>
    )
  }
}

export default MyApp
