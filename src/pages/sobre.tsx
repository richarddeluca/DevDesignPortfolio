import Header from "@/components/header";
import styles from '@/styles/Home.module.css'

export default function Sobre() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.sobre}>
          <h1 className={styles.h1sobre}>Sobre mim</h1>
          <p className={styles.psobre}>
            Olá.
            Sou Richard, desenvolvedor web que mora no DF. Além da programação me interesso por UX design e psicologia. Meu objetivo é criar soluções que ajudem de verdade as pessoas.
          </p>
          <div className={styles.bubbles}>
            <a className={styles.buttonsobre} href="https://drive.google.com/file/d/1HAey6nuT2HmNqQWNYUye6jhmaj105Rk-/view?usp=sharing"><div>Currículo</div></a>
          </div>
        </section>
      </main>
    </>
  )
}