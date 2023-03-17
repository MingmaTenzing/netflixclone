import '@/styles/globals.css'
import { Open_Sans } from '@next/font/google'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../../store'
import { Provider } from 'react-redux'
import {persistStore} from "redux-persist"
import { Analytics } from '@vercel/analytics/react';


const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300','400','500', '600', '700', '800']

  
})

let persistor = persistStore(store)

export default function App({ Component, pageProps }) {
  return(
  <Provider store={store} >
    <PersistGate  persistor={persistor}>
  <main className={openSans.className}>


<Component {...pageProps}  />
<Analytics />

  </main>
  </PersistGate>
  </Provider>


  ) 
}
