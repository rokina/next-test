import styles from '../../styles/Home.module.scss'
import { Layout, Sidebar, Footer, MainConts, Pager } from '/components/Index';
import { format } from 'date-fns';

const Categories = ({ news }) => {
  return (
    <Layout>
      <main>
        <div className={styles.container}>
          <MainConts news={news} />
          <Sidebar />
        </div>
        <Pager />
      </main>
      <Footer />
    </Layout>
  );
}

export default Categories

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch(`https://headless-test.microcms.io/api/v1/categories`, key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/categories/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const news = await fetch(
    `https://headless-test.microcms.io/api/v1/news?filters=category[equals]${id}`,
    key
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: news.contents,
    },
  };
};
