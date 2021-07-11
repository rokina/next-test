import Link from "next/link";
import styles from '../styles/Card1.module.scss';
import { format } from 'date-fns';

const Card1 = (props) => {
  const default_image = "https://images.microcms-assets.io/assets/49f98e2075bc4b10af6d727b1efa9c2b/cca3e5b7438c4f2bbebb56fe2ccd6444/42589447.webp"

  // 日付フォーマット
  const dateFormat = (date, format_type) => {
    return format(new Date(date), format_type);
  };

  return (
    <>
      {props.pickup.map(pickup => (
        <article className={styles.card} key={pickup.id}>
          <Link href={`/news/${pickup.id}`} className={styles.card__item}>
            <span className={styles.card__label}>
              {pickup.category && pickup.category.name}
            </span>
            <img src={pickup.mainVisual && pickup.mainVisual.url ? pickup.mainVisual.url : default_image} alt="" className={styles.card__thumbnail} />
            <div className={styles.card__content}>
              <time className={styles.card__date} dateTime={dateFormat(pickup.publishedAt, 'yyyy-MM-dd')}>
                {dateFormat(pickup.publishedAt, 'yyyy.MM.dd')}
              </time>
              <p className={styles.card__title}>
                {pickup.title}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}

export default Card1
