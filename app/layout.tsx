import './global.scss'
import styles from './home.module.scss'
import ContainerLeft from '@/components/Containers/containerLeft';
import ContainerRight from '@/components/Containers/containerRight';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.container}>
        <ContainerLeft/>
        {children}
        <ContainerRight/>
        </body>
    </html>
  )
}
