import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import proj1 from 'public/proj1.png'
import proj2 from 'public/proj2.png'
import proj3 from 'public/proj3.png'
import Header from '@/components/header'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Deluca</title>
        <meta name="description" content="Portifólio de Richard Deluca" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>

        <div className={styles.center}>
          <div className={styles.title}>
            <h1>Richard Deluca</h1>
            <p>Projetando e desenvolvendo para web e mobile</p>
          </div>
          <div className={styles.bubbles}>
            <div className={styles.bubble}><span>UX</span></div>
            <div className={styles.bubble}><span>UI</span></div>
            <div className={styles.bubble}><span className={styles.front}>Front end</span></div>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://drive.google.com/file/d/1rby1CKiDqB7cb4z4ZLT1LyzEvX3B9-me/view?usp=sharing"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt='apresentação de projeto de aplicativo'
              src={proj1}
              className={styles.img}
            />

          </a>

          <a
            href="https://drive.google.com/file/d/1-xAiRvLGyZMV2Lt8R3yPmBys-RJWDH7b/view?usp=sharing"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt='apresentação de projeto de aplicativo'
              src={proj2}
              className={styles.img}
            />

          </a>

          <a
            href="https://drive.google.com/file/d/1vHlNe6VEeBttBTAoLVdtdNIc0Ux7QCF2/view?usp=sharing"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt='apresentação de projeto de aplicativo'
              src={proj3}
              className={styles.img}
            />

          </a>

        </div>
      </main>
    </>
  )
}
