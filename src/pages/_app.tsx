import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react';
import ToastContainer from '../components/ToastContainer';
import 'tailwindcss/tailwind.css'; 





export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>  <Component {...pageProps} />  <ToastContainer /><Analytics /></Provider>
  
}
