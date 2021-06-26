import React, { useState, useEffect } from 'react'
import Link from "next/link";
import styles from '../styles/Header.module.scss';
import { SearchForm } from '../components/Index';

const Header = () => {
  const [isHeightOver, setIsHeightOver] = useState(false);
  useEffect(() => {
    const scrollAction = () => {
      if (50 > window.scrollY) {
        setIsHeightOver(true);
      } else {
        setIsHeightOver(false);
      }
    };
    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true,
    });
    scrollAction();

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  return (
    <header className={styles.header} className={isHeightOver ? styles.header : `${styles.header} ${styles.fixed}`}>
      <h1 className={styles.header__logo} >
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
  );
}

export default Header
