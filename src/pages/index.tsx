import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import proj1 from 'public/proj1.png'
import proj2 from 'public/proj2.png'
import proj3 from 'public/proj3.png'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Deluca</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href='/' className={styles.navlink}>Projetos</Link>
          <Link href='/' className={styles.navlink}>Sobre</Link>
          <Link href='/' className={styles.navlink}>Contato</Link>
        </nav>
      </header>
      <main className={styles.main}>

        <div className={styles.center}>
          <div className={styles.title}>
            <h1>Richard Deluca</h1>
            <p>Projetando e desenvolvendo para web e mobile</p>
          </div>
          <div className={styles.bubbles}>
            <div className={styles.bubble}><span>UX</span></div>
            <div className={styles.bubble}><span>UI</span></div>
            <div className={styles.bubble}><span className={styles.front}>front end</span></div>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt='apresentação de projeto de aplicativo' src={proj1} />
            <h2 className={inter.className}>
              Projeto 1
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projeto 1
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projeto 1
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

        </div>
      </main>
    </>
  )
}
