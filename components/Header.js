import Link from "next/link";
import styles from '../styles/Header.module.scss';
import SearchForm from "./SearchForm";

const Header = () => (
  <header className={styles.header}>
    {/* <header className={styles.c-header" : className={styles.{ 'is-fixed': scrollY > 1 }"> */}
    <h1 className={styles.header__logo}>
      <Link href="/">
        <a>
          <img src="/logo.png" width="200" height="56" />
        </a>
      </Link>
    </h1>
    <nav className={styles.header__nav}>
      <ul className={styles.header__lists}>
        <li className={styles.header__list}>
          <Link href="/categories/uw-3o99hi" className={styles.header__item}>
            <a>休暇情報</a>
          </Link>
        </li>
        <li className={styles.header__list}>
          <Link href="/categories/280sbixzvibo" className={styles.header__item}>
            <a>日常</a>
          </Link>
        </li>
        <li className={styles.header__list}>
          <Link href="/categories/asjqwlyofn0k" className={styles.header__item}>
            <a>エンタメ</a>
          </Link>
        </li>
      </ul>
    </nav>
    <div className={styles.header__search}>
      <SearchForm />
    </div>
  </header>
)

export default Header
