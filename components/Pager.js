import Link from 'next/link';
import styles from '../styles/Pager.module.scss'

const Pager = ({ totalCount, current_id }) => {
  const PER_PAGE = 4;
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={styles.pager}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li className={styles.pager__list} key={index}>
          <Link href={`/news/page/${number}`}>
            <a className={current_id === number ? `${styles.pager__item} ${styles.active}` : `${styles.pager__item}`}>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pager;
