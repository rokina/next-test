import styles from '../../styles/Home.module.scss'
import { Layout, Sidebar, Footer } from '/components/Index';
import { format } from 'date-fns';

const newsId = ({ news }) => {

  // 日付フォーマット
  const dateFormat = (date, format_type) => {
    return format(new Date(date), format_type);
  };

  return (
    <Layout>
      <main>
        <div className={styles.container}>
          <div className={styles.conts}>
            <p className={styles.label}>{news.category && news.category.name}</p>
            <h1 className={styles.title}>{news.title}</h1>
            <time className={styles.date} dateTime={dateFormat(news.publishedAt, 'yyyy-MM-dd')}>
              {dateFormat(news.publishedAt, 'yyyy.MM.dd')}
            </time>
            <div className={styles.post}
              dangerouslySetInnerHTML={{
                __html: `${news.body}`,
              }}
            ></div>
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default newsId

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://headless-test.microcms.io/api/v1/news', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/news/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const news = await fetch(
    'https://headless-test.microcms.io/api/v1/news/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: news,
    },
  };
};
