import Link from "next/link";
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.nav__list}>
            <Link href="/about/">
              <a className={styles.nav__item}>会社概要</a>
            </Link>
          </li>
          <li className={styles.nav__list}>
            <Link href="/user-policy/">
              <a className={styles.nav__item}>利用規約</a>
            </Link>
          </li>
          <li className={styles.nav__list}>
            <Link href="/privacy-policy/">
              <a className={styles.nav__item}>プライバシーポリシー</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copy}>
        <small>&copy; Nuxt,inc.</small>
      </p>
    </footer>
  );
}

export default Footer
