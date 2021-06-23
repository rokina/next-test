import styles from '../styles/Pager.module.scss'
import Link from "next/link";

const Pager = () => {
  return (
    <ul className={styles.pager}>
      <li className={styles.pager__list}>
        {/* <nuxt-link
          :to="{ path: `/` }"
          class="c-pager__item"
          :class="{ 'is-active': pageNum == 1 }"
          >1</nuxt-link> */}
        <Link href="/1/">
          <a className={`${styles.pager__item} ${styles.active}`}>1</a>
        </Link>
      </li>
    </ul>
  );
}

export default Pager
