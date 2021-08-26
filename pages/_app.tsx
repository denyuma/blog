import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '../styles/globals.css'
import "tailwindcss/tailwind.css"

const MyApp = ({ Component, pageProps }: AppPropsType) => {
  return <Component {...pageProps} />
}

export default MyApp
