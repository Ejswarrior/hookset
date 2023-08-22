import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'


export default function MyApp({ Component, pageProps }: AppProps) {
    console.log('hit')
  return <Component {...pageProps} />
}