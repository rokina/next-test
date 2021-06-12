import styles from '../../styles/Home.module.scss'
import Layout from '../../components/MyLayout';

export default function newsId({ news }) {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>{news.title}</h1>
        <p className={styles.publishedAt}>{news.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.body}`,
          }}
          className={styles.post}
        />
      </main>
    </Layout>
  );
}

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
  const data = await fetch(
    'https://headless-test.microcms.io/api/v1/news/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: data,
    },
  };
};
