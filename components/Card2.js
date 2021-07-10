import Link from "next/link";
import styles from '../styles/Card2.module.scss';
import { format } from 'date-fns';

const Card2 = (props) => {
  const default_image = "https://images.microcms-assets.io/assets/49f98e2075bc4b10af6d727b1efa9c2b/cca3e5b7438c4f2bbebb56fe2ccd6444/42589447.webp"

  // 日付フォーマット
  const dateFormat = (date, format_type) => {
    return format(new Date(date), format_type);
  };

  return (
    <div>
      {props.news.map(news => (
        <article className={styles.card} key={news.id}>
          <Link href={`/news/${news.id}`}>
            <a className={styles.card__item}>
              <span className={styles.card__label}>{news.category.name}</span>
              <img src={news.mainVisual && news.mainVisual.url ? news.mainVisual.url : default_image} alt="" className={styles.card__thumbnail} />
              <div className={styles.card__content}>
                <time className={styles.card__date} dateTime={dateFormat(news.publishedAt, 'yyyy-MM-dd')}>
                  {dateFormat(news.publishedAt, 'yyyy.MM.dd')}
                </time>
                <p className={styles.card__title}>
                  {news.title}
                </p>
              </div>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Card2
