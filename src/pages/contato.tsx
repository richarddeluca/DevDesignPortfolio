import Header from "@/components/header";
import Head from "next/head";
import styles from '@/styles/Home.module.css'

export default function Contato() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.center}>
          <div>
            <h1>Entre em contato</h1>
            <p className={styles.psobre}>richard.deluca.dev@gmail.com</p>
            <p className={styles.psobre}>
              <a href="https://www.linkedin.com/in/richard-deluca-dev/">
                LinkedIn
              </a>
            </p>
          </div>

        </div>


      </main>
    </>
  )
}