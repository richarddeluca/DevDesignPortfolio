import Link from 'next/link'
import styles from './/styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/' className={styles.navlink}>Projetos</Link>
        <Link href='/sobre' className={styles.navlink}>Sobre</Link>
        <Link href='/contato' className={styles.navlink}>Contato</Link>
      </nav>
    </header>
  )
}