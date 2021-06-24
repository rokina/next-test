import styles from '../styles/Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebar__title}>Recommend</h2>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <a href="" className={styles.list__item}>
            <img
              src="http://placehold.jp/80x60.png"
              alt=""
              className={styles.list__image}
            />
            <p className={styles.list__title}>サンプルサンプル</p>
          </a>
        </li>
        <li className={styles.list}>
          <a href="" className={styles.list__item}>
            <img
              src="http://placehold.jp/80x60.png"
              alt=""
              className={styles.list__image}
            />
            <p className={styles.list__title}>サンプルサンプル</p>
          </a>
        </li>
        <li className={styles.list}>
          <a href="" className={styles.list__item}>
            <img
              src="http://placehold.jp/80x60.png"
              alt=""
              className={styles.list__image}
            />
            <p className={styles.list__title}>サンプルサンプル</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar
