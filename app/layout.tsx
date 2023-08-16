'use client'
import './global.scss'
import styles from './home.module.scss'
import ContainerLeft from '@/components/BasicComponents/Containers/containerLeft';
import ContainerRight from '@/components/BasicComponents/Containers/containerRight';
// import awsExports from '../src/aws-exports'
// import { Amplify } from 'aws-amplify';
// import {Auth} from 'aws-amplify'


// Amplify.configure({awsExports, ssr: true})
// Auth.configure(awsExports);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const getAuthenticatedUser = async ()  => {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser()
  //     console.log(user)
  //   }
  //   catch(err) {
  //     console.error(err)
  //   }
  // }

  // getAuthenticatedUser()

  return (
    <html lang="en">
      <head />
      <body className={styles.container}>
        <ContainerLeft/>
        {children}
        </body>
    </html>
  )
}
