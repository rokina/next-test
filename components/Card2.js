import Link from "next/link";
import styles from '../styles/Card2.module.scss';

const Card2 = (props) => {
  return (
    <div>
      {props.news.map(news => (
        <article className={styles.card} key={news.id}>
          <Link href={`/news/${news.id}`}>
            <a className={styles.card__item}>
              <span className={styles.card__label}>{news.category.name}</span>
              <img src={news.mainVisual && news.mainVisual.url} alt="" className={styles.card__thumbnail} />
              <div className={styles.card__content}>
                <time className={styles.card__date}>
                  {news.publishedAt}
                </time>
                <p className={styles.card__title}>
                  {news.title}
                </p>
              </div>
            </a>
          </Link>
        </article>
      ))}
      {/* <article className={styles.card}>
        <Link href={`/news/${news.id}`}>
          <a>{news.title}</a>
        </Link>
      </article> */}
      {/* <ul>
        {props.news.map(news => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>
              <a>{news.title}</a>
            </Link>
            <p>{news.body}</p>
          </li>
        ))}
      </ul> */}
      {/* <article class="c-card" v-for="content in postsData" :key="content.id">
        <nuxt-link :to="`/${content.id}`" class="c-card__item">
          <span class="c-card__label">{{
            content.category && content.category.name
          }}</span>
          <img
            v-if="content.mainVisual"
            :src="content.mainVisual.url"
            alt=""
            class="c-card__thumbnail"
          />
          <img
            v-else
            src="https://images.microcms-assets.io/assets/49f98e2075bc4b10af6d727b1efa9c2b/cca3e5b7438c4f2bbebb56fe2ccd6444/42589447.webp"
            alt=""
            class="c-card__thumbnail"
          />
          <div class="c-card__content">
            <time
              class="c-card__date"
              :datetime="$moment(content.publishedAt).format('YYYY-MM-DD')"
              >{{ $moment(content.publishedAt).format('YYYY.MM.DD') }}</time
            >
            <p class="c-card__title">
              {{ content.title }}
            </p>
          </div>
        </nuxt-link>
      </article> */}
    </div>
  );
}

export default Card2
