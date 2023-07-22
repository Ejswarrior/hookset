import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'

Amplify.configure({awsExports, srr: true})

export default function MyApp({ Component, pageProps }: AppProps) {
    console.log('hit')
  return <Component {...pageProps} />
}