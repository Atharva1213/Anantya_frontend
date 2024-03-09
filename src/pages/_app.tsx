import { store } from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';
import ToastContainer from '../components/ToastContainer';
import 'tailwindcss/tailwind.css';
import Head from 'next/head'; 

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
      <Analytics />
    </Provider>
  );
}

export default App;
