import '@/styles/globals.css'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300','400','500', '600', '700', '800']

  
})

export default function App({ Component, pageProps }) {
  return(<main className={openSans.className}>
<Component {...pageProps}  />
  </main>

  ) 
}
