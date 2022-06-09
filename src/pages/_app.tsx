import React from 'react';

import { createWrapper } from 'next-redux-wrapper';
// import { AppProps } from 'next/app';
import App from 'next/app';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import store from '../redux/store';

import '../styles/main.css';

// const store = createStore(rootReducer);

// const MyApp = ({ Component, pageProps }: AppProps) => (
//   <Provider store={store}>
//     <Component {...pageProps} />
//   </Provider>
// );

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const appProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    console.log(appProps);
    return { appProps };
  }

  render() {
    const { Component, appProps } = this.props;

    return (
      <Provider store={store}>
        <Header />
        <Component {...appProps} />
      </Provider>
    );
  }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
