'use client'
import './global.scss'
import styles from './home.module.scss'
import ContainerLeft from '@/components/BasicComponents/Containers/containerLeft';
import ContainerRight from '@/components/BasicComponents/Containers/containerRight';
import { StrictMode } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <StrictMode>
        <body className={styles.container}>
          <ContainerLeft/>
            <div className={styles.childContainer}>
              {children}
            </div>
          </body>
        </StrictMode>
    </html>
  )
}
