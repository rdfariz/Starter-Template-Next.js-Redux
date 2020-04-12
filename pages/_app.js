import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import initStore from '../src/store/index'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'

class _App extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <React.Fragment>
        <Head>
            <title>My App</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    )
  }
}

export default withRedux(initStore)(_App)