import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import { Inter } from 'next/font/google'
import styles from './MainLayout.module.css'

const inter = Inter({ subsets: ['latin'] })


export const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (  
    <div className='box-container'>
      <Head>
        <title>Home - Heri Espinosa</title>
        <meta name="description" content="Home pages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <main className={`${styles.main} ${inter.className}`}>
        <div className="box">
            {children}
        </div>
      </main>

    </div>
  )
}
